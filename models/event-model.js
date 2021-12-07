const {Schema, model} = require('mongoose');

const EventSchema = new Schema({
    customer:{type:String, ref:'User'},
    venue:{type:String,ref:'Venue'},
    total_price: {type:Number,required:true},
    start_time: {type:Date},
    hours: {type:Number},
    type:{type:String, required:true},
    personal_wishes: {type:String}
  
})

module.exports = model('Event',EventSchema);