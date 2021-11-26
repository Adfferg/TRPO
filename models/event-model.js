const {Schema, model} = require('mongoose');

const EventSchema = new Schema({
    customer:{type:String,ref:'User'},
    venue:{type:String,ref:'Venue'},
    total_price: {type:Number,required:true},
    start_time: {type:Date},
    end_time: {type:Date},
})

module.exports = model('Event',EventSchema);