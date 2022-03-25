const VisitorModel = require("../model/visitor-model")

//add
module.exports.addVisitor = function (req, res) {         //API
    //db insert visitor

    let visitor = new VisitorModel({
        visitorName: req.body.visitorName,
        purpose: req.body.purpose,
        date: req.body.date,
        isAllowed: req.body.isAllowed,
        isPreScheduled: req.body.isPreScheduled,
        mobileNo: req.body.mobileNo,
        visitorCategory: req.body.visitorCategory,
        house: req.body.house,
        profilePhoto: "http://localhost:4000/images/"+req.body.profilePhoto,
        entryTime: req.body.entryTime,
        exitTime: req.body.exitTime
    })

    visitor.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "visitor added successfully", status: 200, data: success })
        }
    })
}

//list
module.exports.getAllVisitors = function (req, res) {
    VisitorModel.find().populate("visitorCategory").populate("house").exec(function (err, visitors) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all visitors are displayed successfully", status: 200, data: visitors })
        }
    })
}

//delete
module.exports.deleteVisitor = function (req, res) {

    let visitorId = req.params.visitorId
    VisitorModel.deleteOne({ "_id": visitorId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "visitor is deleted successfully", status: 200, data: data })
        }
    })
}

//update
module.exports.updateVisitor = function (req, res) {
    let visitorId = req.params.visitorId
    let visitorName = req.body.visitorName
    let purpose = req.body.purpose
    let entryTime = req.body.entryTime
    let exitTime = req.body.exitTime
    let mobileNo = req.body.mobileNo
    let isAllowed = req.body.isAllowed
    let isPreScheduled = req.body.isPreScheduled
    let date = req.body.date

    VisitorModel.updateOne({ "_id": visitorId }, {
        "visitorName": visitorName, "purpose": purpose, "entryTime": entryTime,
        "exitTime": exitTime, "date": date, "isAllowed": isAllowed, "isPreScheduled": isPreScheduled, "mobileNo": mobileNo
    }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "visitor is updated successfully", status: 200, data: data })
        }
    })
}

//get visitor by visitorId
module.exports.getVisitorById = function (req, res) {

    let visitorId = req.params.visitorId;

    VisitorModel.findById({ "_id": visitorId }, function (err, data) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "visitor is found successfully", status: 200, data: data })
        }
    })
}