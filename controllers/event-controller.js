const ApiError = require('../exceptions/api-error')
const eventService = require('../Service/event-service')

class EventController{
    async getInfo(req,res,next){
        try{
            const response = await eventService.getInfo()
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
    async createEvent(req,res,next){
        try{

        }
        catch(e){
            next(e)
        }
    }
}