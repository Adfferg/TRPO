const {model, Schema} = require('mongoose')

const RoleSchema = new Schema({
    name: {type:String, required:true,unique:true,default:'USER'},
})

module.exports = model('Role', RoleSchema)