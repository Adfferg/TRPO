const {Schema, model} = require('mongoose');

const VenueSchema = new Schema({
    name: {type:String,required:true},
    address: {type:String,required:true},
    price: {type:Number, required:true},
    image:{type:String,default:''},
    lat: {type:Number,required:true},
    lng: {type:Number,required:true},
    type_of_events:{type:String,default:''}
})

module.exports = model('Venue',VenueSchema);