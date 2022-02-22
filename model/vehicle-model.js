const mongoose = require("mongoose")

let VehicleSchema = new mongoose.Schema(
    {
       parkingId:{
           type:String,
           required: true,
           unique:true
       } ,
    vehicleNo : {
        type:String,
        required :true,
        maxlength : 10,
        unique:true
    },
    vehicleType:
    {
        type:String,
        required:true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref : "user",
        required: true
    }
    }
)

const VehicleModel = mongoose.model("vehicle",VehicleSchema)

module.exports = VehicleModel;