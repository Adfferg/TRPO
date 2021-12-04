const ApiError = require('../exceptions/api-error')
const reviewService = require('../Service/review-service')

class ReviewController{

    async create(req,res,next){
        try{
            const {email, review} = req.body;
            const response = await reviewService.create(email,review);
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
    async delete(req,res,next){
        try{
            const {id} = req.body;
            console.log(id)
            const response = await reviewService.delete(id);
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
    async getReviews(req,res,next){
        try{
            const response = await reviewService.getReviews();
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }
    async edit(req,res,next){
        try{
        
            const {id, new_review} = req.body;
            const response = await reviewService.edit(id, new_review);  
            return res.json(response)
        }
        catch(e){
            next(e)
        }
    }

}

module.exports = new ReviewController();