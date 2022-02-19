const mongoose = require("mongoose")

//schema
let CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        maxlength: 25,
        required: true, 
        unique: true
    }
})

//model
let CategoryModel = mongoose.model("visitorCategory", CategorySchema)
module.exports = CategoryModel