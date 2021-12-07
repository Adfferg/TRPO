import api from "../http";

export default class EventService{
    static async getInfo(type){
        return api.post('/event/get-info',{type})
    }
    static async createEvent(venueId, staffIds, foodIds, mainInfo){
        return api.post('/event/create',{venueId, staffIds, foodIds, mainInfo})
    }
}