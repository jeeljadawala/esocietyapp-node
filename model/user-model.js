const mongoose = require('mongoose')

//schema
let UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required: true,
        unique: true,
        maxLength: 30
    },

    password : {
        type : String,
        required: true,
        maxLength: 20
    },

    mobileNo : {
        type : String,
        required: true,
        maxLength: 12
    },

    firstName : {
        type : String,
        required: true,
        maxLength: 20
    },

    lastName : {
        type : String,
        required: true,
        maxLength: 20
    },

    // profilePhoto : {
    //     data: Buffer,
    //     contentType: String,
    //     required: true
    // },

    role : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    }

})

//model
const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel