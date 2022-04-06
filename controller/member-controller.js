const MemberModel = require("../model/member-model")

//add
module.exports.addMember = function (req, res) {         //API
    //db insert role


    let member = new MemberModel({
        memberName: req.body.memberName,
        age: req.body.age,
        user: req.body.user,
        house: req.body.house
    })

    member.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "member added successfully", status: 200, data: success })
        }
    })
}

//list
module.exports.getAllMembers = function (req, res) {
    MemberModel.find().populate("user").populate("house").exec(function (err, members) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all members are displayed successfully", status: 200, data: members })
        }
    })
}

//delete
module.exports.deleteMember = function (req, res) {

    let memberId = req.params.memberId
    MemberModel.deleteOne({ "_id": memberId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "member is deleted successfully", status: 200, data: data })
        }
    })
}

//update
module.exports.updateMember = function (req, res) {
    let memberId = req.params.memberId
    let memberName = req.body.memberName
    let age = req.body.age

    MemberModel.updateOne({ "_id": memberId }, { "memberName": memberName, "age": age }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "member is updated successfully", status: 200, data: data })
        }
    })
}

//get Member by Memberid
module.exports.getMemberById = function (req, res) {

    let memberId = req.params.memberId;

    MemberModel.findById({ "_id": memberId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "member is found successfully", status: 200, data: data })
        }
    })
}

//get member by userid
module.exports.findMemberByUserId = function (req, res) {
    let userid = req.body.user
console.log("userid ==:" +userid)
    //console.log("param email", param_email)

    MemberModel.findOne({ user : userid }).populate("house").exec(function (err, data) {
        if (err) {
            res.json({ msg: "member with given userid not found", status: -1, data: err })
            console.log("err")
        }
        else {
            res.json({ msg: "member  found successfully", status: 200, data: data })
            
        }
    })
}