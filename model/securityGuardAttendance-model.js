const mongoose = require('mongoose')

//schema
let GuardAttendanceSchema = new mongoose.Schema({
    isPresent: {
        type : Boolean,
        required: true    
    },
    guard : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"guard",
        required: true
    },
    date: {
        type: String,
        required : true
    }
})
//model
const GuardAttendanceModel = mongoose.model("guardAttendance",GuardAttendanceSchema)
module.exports = GuardAttendanceModel