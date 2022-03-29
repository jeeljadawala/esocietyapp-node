const GuardAttendanceModel = require("../model/securityGuardAttendance-model")

//add
module.exports.addGuardAttendance = function (req, res) {         //API

    let guardAttendance = new GuardAttendanceModel({
       
       isPresent : req.body.isPresent,
       guard : req.body.guard,
       date : req.body.date
    })

    guardAttendance.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "guard Attendance added successfully", status: 200, data: success })
        }
    })
}

//list
module.exports.getAllGuardAttendances = function (req, res) {
    GuardAttendanceModel.find().populate("guard").exec(function (err, guardAttendances) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all guard Attendances are displayed successfully", status: 200, data: guardAttendances })
        }
    })
}

//delete
module.exports.deleteGuardAttendance = function(req, res){

    let guardAttendanceId = req.params.guardAttendanceId
    GuardAttendanceModel.deleteOne({"_id" : guardAttendanceId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "security guard Attendance is deleted successfully", status: 200, data: data })
        }
    })
}

//update
module.exports.updateGuardAttendance = function(req, res){
    let guardAttendanceId = req.params.guardAttendanceId
    let isPresent = req.body.isPresent

    GuardAttendanceModel.updateOne({"_id" : guardAttendanceId},{ "isPresent": isPresent}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "guard Attendance details are updated successfully", status: 200, data: data })
        }
    })
}

//get guard attendance record by guard attendance id
module.exports.getGuardAttendanceById = function(req, res){
    
    let guardAttendanceId = req.params.guardAttendanceId;
    
    GuardAttendanceModel.findById({"_id" : guardAttendanceId}).populate("guard").exec(function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "guard Attendance detail is found successfully", status: 200, data: data })
        }
    })
}

//get guardattendences by guard

module.exports.getAttendance = function (req, res) {
    let param_guardid = req.body.guard

    console.log("guard id : ", param_guardid)

    GuardAttendanceModel.count({ guard : param_guardid}, function (err, data) {
        if (err) {
            res.json({ msg: "guard attendances with given guard id not found", status: -1, data: err })
        }
        else {
            console.log("guard id : ", data._id)
            res.json({ msg: "guard attendance is found successfully", status: 200, data: data, id : data._id })
        }
    })
}