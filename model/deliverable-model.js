const mongoose = require('mongoose')

//schema
let DeliverableSchema = new mongoose.Schema({
    date : {
        type:Date,
        required:true,
        
      
    },

    isPickup : {
        type : Boolean,
        required:true
        
       
    },


    house : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"house"
    }

},{timestamps: false})

//model
const DeliverableModel = mongoose.model("deliverable",DeliverableSchema)
module.exports = DeliverableModel
 