const UserModel = require("../model/user-model")
const bcrypt = require("bcrypt")
const nodemailer = require('nodemailer')

//add
module.exports.addUser = function (req, res) {         //API

    //console.log(req.body.firstName)

    let encryptedPassword = bcrypt.hashSync(req.body.password, 10)

    let user = new UserModel({
        email: req.body.email,
        password: encryptedPassword,
        mobileNo: req.body.mobileNo,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        profilePhoto: req.body.profilePhoto !== "" ? ("http://localhost:4000/images/" + req.body.profilePhoto) : ""
    })

    user.save(function (err, success) {
        if (err) {
            //console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "user added successfully", status: 200, data: success })
        }
    })
}

//find user by email
module.exports.findUserByEmail = function (req, res) {
    let param_email = req.body.email

    //console.log("param email", param_email)

    UserModel.findOne({ email: param_email }).populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "user with given mail id not found", status: -1, data: err })
        }
        else {
            res.json({ msg: "user is found successfully", status: 200, data: data })
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
module.exports.deleteUser = function (req, res) {

    let userId = req.params.userId
    UserModel.deleteOne({ "_id": userId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "user is deleted successfully", status: 200, data: data })
        }
    })
}

//update
module.exports.updateUser = function (req, res) {
    let userId = req.params.userId
    let email = req.body.email
    //let password = bcrypt.hashSync(req.body.password, 10)
    let mobileNo = req.body.mobileNo
    let firstName = req.body.firstName
    let lastName = req.body.lastName
    let role = req.body.role
    //let profilePhoto = req.body.profilePhoto

    UserModel.updateOne({ "_id": userId },
        {
            "email": email, "mobileNo": mobileNo,
            //"password": password
            "firstName": firstName, "lastName": lastName
            //"profilePhoto": profilePhoto
            , "role": role
        }, function (err, data) {
            if (err) {
                res.json({ msg: "Something Went Wrong", status: -1, data: err })
            }
            else {
                res.json({ msg: "user is updated successfully", status: 200, data: data })
            }
        })
}

//update profile proto
module.exports.updatePhoto = function (req, res) {

    let userId = req.params.userId
    let profilePhoto = req.body.profilePhoto

    UserModel.updateOne({ "_id": userId },
        {
            "profilePhoto": profilePhoto !== "" ? ("http://localhost:4000/images/" + profilePhoto) : ""

        }, function (err, data) {
            if (err) {
                res.json({ msg: "Something Went Wrong", status: -1, data: err })
            }
            else {
                res.json({ msg: "user profile picture updated successfully", status: 200, data: data })
            }
        })
}



//get user by userid
module.exports.getUserById = function (req, res) {

    let userId = req.params.userId;
    //console.log("user id - ",userId)

    UserModel.findById({ "_id": userId }).populate("role").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            //data.password = bcrypt.data.password
            //password : bcrypt.data.password
            res.json({ msg: "user is found successfully", status: 200, data: data })
        }
    })
}

//login
module.exports.login = function (req, res) {

    let param_email = req.body.email
    let param_password = req.body.password
    let param_role = req.body.role

    let isCorrect = false;

    UserModel.findOne({ email: param_email }).populate("role").exec(function (err, data) {
        if (data) {
            //console.log("in if condition")
            let ans = bcrypt.compareSync(param_password, data.password)
            if (ans == true) {
                //console.log("password matched")
                if (data.role._id == param_role) {
                    isCorrect = true
                    //console.log("correct credentials")
                }
            }
        }

        if (isCorrect == false) {
            res.json({ msg: "Invalid Credentials...", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            //console.log("user id : ", data._id)
            //console.log("data : ",data)
            res.json({ msg: "Login....", data: data, status: 200, id: data._id })//http status code 
        }
    })
}

//verify mail address
module.exports.verifyEmail = function (req, res) {

    //console.log("verify email api called")

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'esociety.mern@gmail.com',
            pass: 'eSociety4.'
        }
    });

    var mailOptions = {
        from: 'esociety.mern@gmail.com',// sender address
        to: req.body.email, // list of receivers
        subject: "To verify given email address", // Subject line
        text: "Your verification code is " + req.body.otp,
        html: `
        <div style="padding:10px;border-style: ridge">
        <p>You requested to create a new account for using esociety web application.</p>
        <h3>Enter below otp in Form</h3>
        <ul>
            <li>OTP: ${req.body.otp}</li>
        </ul>
        `
    };

    //console.log("otp received : ", req.body.otp)
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json({ status: true, respMesg: 'Email Sent Successfully', data: error })
        }
        else {
            //console.log("mail sent")
            res.json({ status: true, respMesg: 'Email Sent Successfully', data: info })
        }

    })
}