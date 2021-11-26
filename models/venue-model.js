const {Schema, model} = require('mongoose');

const VenueSchema = new Schema({
    name: {type:String,required:true},
    address: {type:String,required:true},
    capacity: {type:Number, required:true},
    price: {type:Number, required:true},
    activationLink: {type:String},
    open_time:{type:Date},
    close_time:{type:Date},
    image:{type:String,default:''},
    image_id:{type:String,default:''}
})

module.exports = model('Venue',VenueSchema);