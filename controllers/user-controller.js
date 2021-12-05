const userService = require('../service/user-service')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')

class UserController{

    async registration(req,res,next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Validation error',errors.array()))
            }
            const {email, password,name, surname} = req.body;
            const userData = await userService.registration(email,password,name,surname);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly:true})
            return res.json(userData)
        }
        catch(e){
            next(e)
        }
    }

    async login(req,res,next){
        try{
            const {email, password} = req.body
            const userData = await userService.login(email,password)
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true,sameSite:'none',secure:true })
            return res.json(userData)
        }
        catch(e){
            next(e)
        }
    }

    async logout(req,res,next){
        try{
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        }
        catch(e){
            next(e)
        }
    }

    async activate(req,res,next){
        try{
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        }
        catch(e){
            next(e)
        }
    }

    async refresh(req,res,next){
        try{
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken',userData.refreshToken,{maxAge:30*24*60*60*1000,httpOnly:true,sameSite:'none',secure:true})
            return res.json(userData)
        }
        catch(e){
            next(e)
        }
    }

    async getUserInfo(req,res,next){
        try{
            const {_id} = req.body
            const response = await userService.getUserInfo(_id)
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }

    async setAvatar(req,res,next){
        try{
            const {email,data} = req.body
            const response = await userService.setAvatar(email,data)
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }

    async sendActivationLink(req,res,next){
        try{
            const {email} = req.body
            await userService.sendActivationLink(email)

        }
        catch(e){
            next(e)
        }
    }

    async createApplication(req,res,next){
        try{
            const {name,email,phone} = req.body
            const response = await userService.createApplication(name,email,phone)
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
    async getApplications(req,res,next){
        try{
            const response = await userService.getApplications()
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }

}

module.exports = new UserController();