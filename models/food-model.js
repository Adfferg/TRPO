const {Schema, model} = require('mongoose');

const FoodSchema = new Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    type:{type:String,ref:'Type_of_food'},
    image:{type:String,default:''},
    image_id:{type:String,default:''}
})

module.exports = model('Food',FoodSchema);