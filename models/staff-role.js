const {Schema, model} = require('mongoose');

const StaffRoleSchema = new Schema({
    type_of_food: {type:String, unique:true,required:true},
})

module.exports = model('Staff_role',StaffRoleSchema);