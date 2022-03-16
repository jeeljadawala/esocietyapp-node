const mongoose = require('mongoose')

//schema
let DeliverableSchema = new mongoose.Schema({
    date : {
        type:String,
        required:true,      
    },

    isPickup : {
        type : Boolean,
        required:true      
    },

    house : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"house",
        required: true
    }
})

//model
const DeliverableModel = mongoose.model("deliverable",DeliverableSchema)
module.exports = DeliverableModel