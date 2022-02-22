const mongoose = require('mongoose')

//schema
let GuardAttendanceSchema = new mongoose.Schema({
    
    guard : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"guard",
        required: true
    },
    isPresent: {
        type : Boolean,
        required:true ,
        default : false
    },
    date: {
        type: String,
        required : true
    }
})
//model
const GuardAttendanceModel = mongoose.model("guardAttendance",GuardAttendanceSchema)
module.exports = GuardAttendanceModel