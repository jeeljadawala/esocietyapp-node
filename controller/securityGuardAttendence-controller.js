const GuardAttendenceModel = require("../model/securityGuardAttendence-model")

//add
module.exports.addGuardAttendence = function (req, res) {         //API

    let guardAttendence = new GuardAttendenceModel({
       
       isPresent : req.body.isPresent,
       guard : req.body.guard
    })

    guardAttendence.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: data.err })
        }
        else {
            res.json({ msg: "guard attendence added successfully", status: 200, data: success })
        }
    })
}

//list
module.exports.getAllGuardAttendences = function (req, res) {
    GuardAttendenceModel.find().populate("guard").exec(function (err, guardAttendences) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all guard attendences are displayed successfully", status: 200, data: guardAttendences })
        }
    })
}

//delete
module.exports.deleteGuardAttendence = function(req, res){

    let guardAttendenceId = req.params.guardAttendenceId
    GuardAttendenceModel.deleteOne({"_id" : guardAttendenceId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "security guard attendence is deleted successfully", status: 200, data: data })
        }
    })
}

//update
module.exports.updateGuardAttendence = function(req, res){
    let guardAttendenceId = req.body.guardAttendenceId
    let isPresent = req.body.isPresent

    GuardAttendenceModel.updateOne({"_id" : guardAttendenceId},{ "isPresent": isPresent}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "guard attendence details are updated successfully", status: 200, data: data })
        }
    })
}

//get user by userid
module.exports.getGuardAttendenceById = function(req, res){
    
    let guardId = req.params.guardId;
    
    GuardAttendenceModel.findById({"guard" : guardId}).populate("guard").exec(function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "guard attendence detail is found successfully", status: 200, data: data })
        }
    })
}