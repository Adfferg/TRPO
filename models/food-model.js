const {Schema, model} = require('mongoose');

const FoodSchema = new Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    image:{type:String,default:''},
})

module.exports = model('Food',FoodSchema);