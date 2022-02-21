const mongoose = require('mongoose')

//schema
let VisitorSchema = new mongoose.Schema({
    purpose : {
        type : String,
        required: true,
        maxLength: 150
    },

    date : {
        type: String, 
        required: true
    },

    isAllowed : {
        type : Boolean,
        required:true
    },

    isPreScheduled : {
        type : Boolean,
        required:true
    },

    mobileNo : {
        type : String,
        required: true,
        maxLength: 12
    },

    visitorName : {
        type : String,
        required: true,
        maxLength: 25
    },

    profilePhoto : {
        type: String
     },

    visitorCategory : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"visitorCategory"
    },

    house : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "house"
    },

    entryTime : {
        type : String
    },

    exitTime : {
        type : String
    }

})

//model
const VisitorModel = mongoose.model("visitor",VisitorSchema)
module.exports = VisitorModel