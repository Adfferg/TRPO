const ApiError = require('../exceptions/api-error')
const eventService = require('../Service/event-service')

class EventController{

    async getInfo(req,res,next){
        try{
            const{type} = req.body
            const response = await eventService.getInfo(type)
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
    async createEvent(req,res,next){
        try{
            const {venueId, staffIds, foodIds, mainInfo} = req.body
            const response = await eventService.createEvent(venueId, staffIds, foodIds, mainInfo)
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
    async createVenue(req,res,next){
        try{
            const {name, address, price, lat, lng,image,image_id} = req.body;
            const response = await eventService.createVenue(name, address, price, lat, lng,image,image_id)
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
 
    async createStaff(req,res,next){
        try{
            const {name, salary, avatar, avatar_id,description} = req.body;
            const response = await eventService.createStaff(name, salary, avatar, avatar_id,description)
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
    async createFood(req,res,next){
        try{
            const {name, price, image} = req.body;
            const response = await eventService.createFood(name, price, image)
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
    async getUserEvents(req,res,next){
        try{
            const{email} = req.body
            const response = await eventService.getUserEvents(email)
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
}

module.exports = new EventController();