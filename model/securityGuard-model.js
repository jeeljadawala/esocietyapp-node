const mongoose = require('mongoose')

//schema
let GuardSchema = new mongoose.Schema({
    scheduleTime : {
        type : String,
        required: true,
        maxLength: 300
    },

    mobileNo : {
        type : String,
        required: true,
        maxLength: 12
    },

    guardName : {
        type : String,
        required: true,
        maxLength: 25
    },

    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
        unique : true
    }

})

//model
const GuardModel  = mongoose.model("guard", GuardSchema)
module.exports = GuardModel