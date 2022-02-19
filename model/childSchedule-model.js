const mongoose = require("mongoose")

let ChildScheduleSchema = new mongoose.Schema(
    {
        //profile pic and time to be added
        childName:
        {
            type:String,
            required:true,
            maxlength:20
        },
        age : {
            type : Number,
            required: true,
            maxLength: 3
        },
        contactName:
        {
            type:String,
            required:true,
            maxlength:20
        },
        contactNo : {
            type : String,
            required: true,
            maxLength: 12
        },
        house:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"house"
        }



    }
)

const ChildScheduleModel = mongoose.model("childSchedule",ChildScheduleSchema)

module.exports = ChildScheduleModel;