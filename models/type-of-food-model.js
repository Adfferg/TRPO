const {Schema, model} = require('mongoose');

const TypeOfFoodSchema = new Schema({
    type_of_food: {type:String, unique:true,required:true},
})

module.exports = model('Type_of_food',TypeOfFoodSchema);