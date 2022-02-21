const mongoose = require('mongoose')

//schema
let GuardAttendenceSchema = new mongoose.Schema({
    isPresent : {
        type : Boolean,
        required: true    
    },
    guard : {
        type : mongoose.Schema.Types.ObjectId,
        ref:"guard"
    }
})
//model
const GuardAttendenceModel = mongoose.model("guardAttendence",GuardAttendenceSchema)
module.exports = GuardAttendenceModel