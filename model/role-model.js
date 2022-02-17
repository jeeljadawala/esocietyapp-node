const mongoose = require("mongoose")

//schema
let RoleSchema = new mongoose.Schema({
    roleName: {
        type: String
        //required: true
    }
})

//model
let RoleModel = mongoose.model("roles", RoleSchema)

module.exports = RoleModel