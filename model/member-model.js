const mongoose = require("mongoose")

//schema
let MemberSchema = new mongoose.Schema({
    memberName : {
        type : String,
        required: true,
        maxLength: 50
    },

    age : {
        type : Number,
        required: true,
        maxLength: 3
    },

   
     user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true
    },

    house:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"house",
        required: true
    }

})

//model
const MemberModel = mongoose.model("member",MemberSchema)
module.exports = MemberModel
 