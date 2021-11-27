const {Schema, model} = require('mongoose');

const ReviewSchema = new Schema({
    review: {type:String, required:true},
    user_email:{type:String, required:true},
    user_id:{type:String, required:true},
    edited:{type:Boolean,default:false},
    date:{type:Date},
})

module.exports = model('Review',ReviewSchema);