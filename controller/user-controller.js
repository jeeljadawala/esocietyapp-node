const UserModel = require("../model/user-model")
const bcrypt = require("bcrypt")

//add
module.exports.addUser = function (req, res) {         //API
    //db insert role
    //console.log(req.body.roleName)

    let encryptedPassword = bcrypt.hashSync(req.body.password,10)

    let user = new UserModel({
        email: req.body.email,
        password : encryptedPassword,
        mobileNo : req.body.mobileNo,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        role: req.body.role,
        profilePhoto : req.body.profilePhoto
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

//login
module.exports.login = function(req,res){

    let param_email = req.body.email
    let param_password  = req.body.password 

    let isCorrect = false; 

    UserModel.findOne({email:param_email},function(err,data){
        if(data){
            let ans =  bcrypt.compareSync(param_password,data.password)
            if(ans == true){
                    isCorrect = true
            }
        }
    
        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: req.body, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "Login....", data: data, status: 200 })//http status code 
        }
    })

}