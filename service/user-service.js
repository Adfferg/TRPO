const UserModel = require('../models/user-model')
const ApplicationModel = require('../models/application-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto') 
const ApiError = require('../exceptions/api-error')

class UserService{
    async registration(email,password,name,surname){
        const candidate = await UserModel.findOne({email});
        if(candidate){
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`);
        }
        const hashPassword = await bcrypt.hash(password,3);
        const activationLink = uuid.v4();
        const user = await UserModel.create({email, password:hashPassword,activationLink,name,surname});
        await mailService.sendActivationMail(email,`${process.env.API_URL}/activate/${activationLink}`,name,surname);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user:userDto}
    }
    async activate(activationLink){
        const user = await UserModel.findOne({activationLink})
        if(!user){
            throw ApiError.BadRequest('Неверная ссылка для активации')
        }
        user.isActivated = true
        await user.save()
    }
    
    async login(email,password){
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('Неверный логин или пароль')
        }
        const isPassEquals = await bcrypt.compare(password,user.password)
        if(!isPassEquals){
            throw ApiError.BadRequest('Неверный логин или пароль')
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user:userDto}
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token
    }
    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnathorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDatabase = await tokenService.findToken(refreshToken)
        if(!userData ||!tokenFromDatabase){
            throw ApiError.UnathorizedError()
        }
        const user =  await UserModel.findById(userData.id)
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user:userDto}
    }

    async getUserInfo(_id){
        const user = await UserModel.findOne({_id})
        if(!user){
            throw ApiError.BadRequest('Пользователь не существует')
        }
        return user
    }
    
    async setAvatar(email,data){
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('Пользователь не существует')
        }
        user.avatar = data.secure_url
        user.avatar_id=data.public_id
        await user.save()
        return true
    }

    async sendActivationLink(email){
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('Пользователь не существует')
        }
        if(user.isActivated){
            throw ApiError.BadRequest('Пользователь уже авторизован')
        }
        const activationLink = uuid.v4()
        await mailService.sendActivationMail(email,`${process.env.API_URL}/activate/${activationLink}`,user.login)
        user.activationLink = activationLink
        await user.save()
    }

    async createApplication(name,email,phone){
        const new_application = await ApplicationModel.create({
            name,email,phone
        })
        return new_application
    }

    async getApplications(){
        const applications = await ApplicationModel.find()
        return applications
    }
}

module.exports = new UserService();