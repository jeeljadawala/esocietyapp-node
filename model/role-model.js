const mongoose = require("mongoose")

//schema
let RoleSchema = new mongoose.Schema({
    roleName: {
        type: String
        //required: true
    }
})

//model
let RoleModel = mongoose.model("role", RoleSchema)

module.exports = RoleModel