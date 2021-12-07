const {Schema, model} = require('mongoose');

const StaffSchema = new Schema({
    name: {type:String, required:true},
    salary: {type:Number, required:true},   
    avatar:{type:String,default:''},
    description: {type:String, required:true},
    type_of_events:{type:String,default:''}
})

module.exports = model('Staff',StaffSchema);