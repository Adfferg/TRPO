import api from "../http";

export default class ReviewService{
    static async create(email,review){
        return api.post('/reviews/create', {email,review})
    }

    static async getReviews(){
        return api.get('/reviews/get_reviews')
    }
    static async delete(id){
        return api.post('/reviews/delete', {id})
    }
    static async edit(id,new_review){
        return api.post('/reviews/edit', {id, new_review})
    }
}