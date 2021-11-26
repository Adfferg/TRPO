const {Schema, model} = require('mongoose');

const StaffSchema = new Schema({
    name: {type:String, required:true},
    salary: {type:Number, required:true},
    isActivated: {type:Boolean, default:false},
    role:{type:String,ref:'Staff_role'},
    avatar:{type:String,default:''},
    avatar_id:{type:String,default:''}
})

module.exports = model('Staff',StaffSchema);