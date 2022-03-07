const DeliverableModel = require("../model/deliverable-model")

//add
module.exports.addDeliverable = function (req, res) {         //API
    //db insert role
    //console.log(req.body.roleName)

    let deliverable = new DeliverableModel({
        house: req.body.house,
        isPickup : req.body.isPickup,
        date: req.body.date,
        
    })
    

    deliverable.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: data.err })
        }
        else {
            res.json({ msg: "deliverable added successfully", status: 200, data: success })
        }
    })
}

//list
module.exports.getAllDeliverables = function (req, res) {
    DeliverableModel.find().populate("house").exec(function (err, deliverables) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all deliverables are displayed successfully", status: 200, data: deliverables })
        }
    })
}

//delete
module.exports.deleteDeliverable = function(req, res){

    let deliverableId = req.params.deliverableId
    DeliverableModel.deleteOne({"_id" : deliverableId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "deliverable is deleted successfully", status: 200, data: data })
        }
    })
}

//update
module.exports.updateDeliverable = function(req, res){
    let deliverableId = req.params.deliverableId
    let date =req.body.date

    DeliverableModel.updateOne({"_id" : deliverableId},{ "date":date}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "deliverable is updated successfully", status: 200, data: data })
        }
    })
}

//list deliverable by deliverableid
module.exports.getDeliverableById = function(req, res){
    
    let deliverableId = req.params.deliverableId;
    
    DeliverableModel.findById({"_id" : deliverableId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "deliverable is found successfully", status: 200, data: data })
        }
    })
}