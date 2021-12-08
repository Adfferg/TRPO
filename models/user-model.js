const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    email: {type:String, unique:true,required:true},
    password: {type:String, required:true},
    isActivated: {type:Boolean, default:false},
    activationLink: {type:String},
    role:{type:String,default:"USER"},
    last_login:{type:Date},
    avatar:{type:String,default:''},
    avatar_id:{type:String,default:''},
    blocked:{type:Boolean,default:false}
})

module.exports = model('User',UserSchema);