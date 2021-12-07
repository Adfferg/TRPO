const {Schema, model} = require('mongoose');

const EventStaffSchema = new Schema({
    staff:{type:String,ref:'Staff'},
    event:{type:String,ref:'Event'},
})

module.exports = model('Event_staff',EventStaffSchema);