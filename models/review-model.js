const {Schema, model} = require('mongoose');

const ReviewSchema = new Schema({
    review: {type:String, required:true},
    user:{type:String,ref:'User'},
    last_login:{type:Date},
})

module.exports = model('Review',ReviewSchema);