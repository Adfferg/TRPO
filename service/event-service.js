const VenueModel = require('../models/venue-model')
const StaffModel = require('../models/staff-model')
const FoodModel = require('../models/food-model')
const UserModel = require('../models/user-model')
const EventModel = require('../models/event-model')
const EventStaffModel = require('../models/event-staff-model')
const EventFoodModel = require('../models/event-food-model')
const ApiError = require('../exceptions/api-error')
const mailService = require('./mail-service')

class EventService{
    async getInfo(type){
        const venues = await VenueModel.find({'type_of_events':{ $regex: '.*' + type + '.*' }});
        const staff = await StaffModel.find({'type_of_events':{ $regex: '.*' + type + '.*' }});
        const food = await FoodModel.find();
        return {venues, staff, food}
    }

    async createVenue(name, address, price, lat, lng,image,image_id){
        const venue = await VenuewModel.create({
            name, address, price, lat, lng,image,image_id
        })
        return venue;
    }

    async createStaff(name, salary, avatar, avatar_id,description){
        const venue = await StaffModel.create({
            name, salary, avatar, avatar_id,description
        })
        return venue;
    }
    async createFood(name, price, image){
        const food = await FoodModel.create({
            name, price, image
        })
        return food;
    }
    async createEvent(venueId, staffIds, foodIds, mainInfo){
        const email = mainInfo.email
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('Пользователь не существует')
        }
        const event = await EventModel.create({
            customer:user._id,
            venue:venueId,
            total_price:mainInfo.total_price,
            start_time:mainInfo.start_time,
            hours:mainInfo.hours,
            type:mainInfo.type,
            personal_wishes:mainInfo.personal_wishes
        })
        if(!event){
            throw ApiError.BadRequest('Неизвестная ошибка')
        }
        staffIds.forEach(async(element) => {
            await EventStaffModel.create({staff:element[0]._id,event:event._id })
        });
        console.log(foodIds)
        foodIds.forEach(async(food) => {
            console.log(food[0])
            await EventFoodModel.create({food:food[0]._id, event:event._id, amount:food[1]})
        });
        await mailService.sendEventMail(user.email, user.name,user.surname, event.total_price)
        return true
    }
    async getUserEvents(email){
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('Такого пользователя не существует')
        }
        const events = await EventModel.find({user:user._id}).populate('venue')
        return events
    }
}

module.exports = new EventService();