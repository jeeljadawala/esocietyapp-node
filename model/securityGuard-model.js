const mongoose = require('mongoose')

//schema
let GuardSchema = new mongoose.Schema({
    schedule : {
        type : String,
        //required: true,
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

})

//model
const GuardModel  = mongoose.model("guard", GuardSchema)
module.exports = GuardModel