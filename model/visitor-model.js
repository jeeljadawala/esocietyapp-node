const mongoose = require('mongoose')

//schema
let VisitorSchema = new mongoose.Schema({
    purpose : {
        type : String,
        required: true,
        maxLength: 150
    },

    date : {
        type: Date, 
        default: Date.now,
        required: true,
        timestamps: false
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

    // profilePhoto : {
    //     data: Buffer,
    //     contentType: String,
    //     required: true
    // },

    visitorCategory : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"visitorCategory"
    },

    house : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "house"
    }

})

//model
const VisitorModel = mongoose.model("visitor",VisitorSchema)
module.exports = VisitorModel