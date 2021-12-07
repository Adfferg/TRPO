const {Schema, model} = require('mongoose');

const EventFoodSchema = new Schema({
    food:{type:String,ref:'Food'},
    event:{type:String,ref:'Event'},
    amount:{type:Number, required:true}
})

module.exports = model('Event_food',EventFoodSchema);