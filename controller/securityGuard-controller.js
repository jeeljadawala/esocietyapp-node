const GuardModel = require("../model/securityGuard-model")

//add
module.exports.addGuard = function (req, res) {         //API
    //db insert security guard
    //console.log(req.body.roleName)

    let guard = new GuardModel({
        scheduleTime: req.body.scheduleTime,
        mobileNo : req.body.mobileNo,
        guardName : req.body.guardName,
        user:req.body.user,
    })

    guard.save(function (err, success) {
        if (err) {
            //console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "guard added successfully", status: 200, data: success })
        }
    })
}

//list
module.exports.getAllGuards = function (req, res) {
    GuardModel.find().populate("user").exec(function (err, guards) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all guards are displayed successfully", status: 200, data: guards })
        }
    })
}

//delete
module.exports.deleteGuard = function(req, res){

    let guardId = req.params.guardId
    GuardModel.deleteOne({"_id" : guardId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "security guard is deleted successfully", status: 200, data: data })
        }
    })
}

//update
module.exports.updateGuard = function(req, res){
    let guardId = req.params.guardId
    let guardName = req.body.guardName

    GuardModel.updateOne({"_id" : guardId},{ "guardName": guardName}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "guard details are updated successfully", status: 200, data: data })
        }
    })
}

//get user by userid
module.exports.getGuardById = function(req, res){
    
    let guardId = req.params.guardId;
    
    GuardModel.findById({"_id" : guardId}).populate("user").exec(function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "guard detail is found successfully", status: 200, data: data })
        }
    })
}

//find guard by user
module.exports.findGuardByUser = function (req, res) {
    let param_user = req.body.user

    //console.log("user id : ", param_user)

    GuardModel.findOne({ user: param_user }, function (err, data) {
        if (err) {
            res.json({ msg: "guard with given user id not found", status: -1, data: err })
        }
        else {
            //console.log("guard id : ", data._id)
            res.json({ msg: "guard is found successfully", status: 200, data: data, id : data._id })
        }
    })
}