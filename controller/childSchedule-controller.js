const ChildScheduleModel = require("../model/childSchedule-model")

//add
module.exports.addChildSchedule = function (req, res) {         //API
    //db insert role
   

    let childSchedule = new ChildScheduleModel({
     childName:req.body.childName,
    age: req.body.age,
    contactName : req.body.contactName,
    contactNo: req.body.contactNo,
    house:req.body.house,
    profilePhoto : req.body.profilePhoto,
    allowedStartingTime : req.body.allowedStartingTime,
    allowedEndingTime : req.body.allowedEndingTime
    })

    childSchedule.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong ! Please try again later", status: -1, data: data.err })
        }
        else {
            res.json({ msg: "childSchedule added successfully", status: 200, data: success })
        }
    })
}

//list
module.exports.getAllChildSchedules = function (req, res) {
    ChildScheduleModel.find().populate("house").exec(function (err, childSchedules) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all childSchedules are displayed successfully", status: 200, data: childSchedules })
        }
    })
}

//delete
module.exports.deleteChildSchedule = function(req, res){

    let childScheduleId = req.params.childScheduleId
    ChildScheduleModel.deleteOne({"_id" : childScheduleId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "childSchedule is deleted successfully", status: 200, data: data })
        }
    })
}

//update
module.exports.updateChildSchedule = function(req, res){
    let childScheduleId = req.body.childScheduleId
    let allowedStartingTime = req.body.allowedStartingTime
    let allowedEndingTime = req.body.allowedEndingTime
   
    //update schedule time 
    ChildScheduleModel.updateOne({"_id" : childScheduleId},{ "allowedStartingTime":allowedStartingTime,"allowedEndingTime": allowedEndingTime}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "childSchedule is updated successfully", status: 200, data: data })
        }
    })
}

//get childSchedule by childScheduleid
module.exports.getChildScheduleById = function(req, res){
    
    let childScheduleId = req.params.childScheduleId;
    
    ChildScheduleModel.findById({"_id" : childScheduleId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "childSchedule is found successfully", status: 200, data: data })
        }
    })
}