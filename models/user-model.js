const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type:String, unique:true,required:true},
    password: {type:String, required:true},
    isActivated: {type:Boolean, default:false},
    activationLink: {type:String},
    role:{type:String,ref:'Role'},
    last_login:{type:Date},
    avatar:{type:String,default:''},
    avatar_id:{type:String,default:''}
})

module.exports = model('User',UserSchema);