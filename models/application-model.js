const {Schema, model} = require('mongoose');

const ApplicationSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
})

module.exports = model('Application',ApplicationSchema);