const UserModel = require("../model/user-model")

//add
module.exports.addUser = function (req, res) {         //API
    //db insert role
    //console.log(req.body.roleName)

    let user = new UserModel({
        email: req.body.email,
        password : req.body.password,
        mobileNo : req.body.mobileNo,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        role: req.body.role
    })

    user.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: data.err })
        }
        else {
            res.json({ msg: "user added successfully", status: 200, data: success })
        }
    })
}

//list
module.exports.getAllUsers = function (req, res) {
    UserModel.find().populate("role").exec(function (err, users) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all users are displayed successfully", status: 200, data: users })
        }
    })
}

//delete
module.exports.deleteUser = function(req, res){

    let userId = req.params.userId
    UserModel.deleteOne({"_id" : userId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "user is deleted successfully", status: 200, data: data })
        }
    })
}

//update
module.exports.updateUser = function(req, res){
    let userId = req.body.userId
    let email = req.body.email

    UserModel.updateOne({"_id" : userId},{ "email": email}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "user is updated successfully", status: 200, data: data })
        }
    })
}

//get user by userid
module.exports.getUserById = function(req, res){
    
    let userId = req.params.userId;
    
    UserModel.findById({"_id" : userId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "user is found successfully", status: 200, data: data })
        }
    })
}