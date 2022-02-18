const mongoose = require("mongoose")

let HouseSchema = new mongoose.Schema(
    {
        houseTitle :{
            type : String,
            required : true,
            unique : true,
            maxlength : 5
        }
    }
)

const HouseModel = mongoose.model("house",HouseSchema)

module.exports = HouseModel;