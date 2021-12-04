const ReviewModel = require('../models/review-model')
const UserModel = require('../models/user-model')
const ApiError = require('../exceptions/api-error')

class ReviewService{
    async create(email, review){
        const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.BadRequest('Пользователь не существует')
        }
        const date = new Date().getTime();
        const new_review = await ReviewModel.create({
            review,
            user_email:email,
            user_id: user.id,
            date
        })
        return new_review
    }
    async delete(id){
        const review = await ReviewModel.findOne({_id:id});
        if(review){
            const res = await review.remove()
            return res
        }
        return false;
    }
    async edit(id, new_review){
        const review = await ReviewModel.findOne({_id:id});
        if(review){
            review.review = new_review;
            review.date = new Date().getTime();
            review.edited = true;
            await review.save();
            return review;
        }
        return false;
    }
    async getReviews(){
        const reviews = await ReviewModel.find().sort("-date");
        return reviews;
    }

}

module.exports = new ReviewService();