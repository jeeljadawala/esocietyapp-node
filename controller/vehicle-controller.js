const VehicleModel = require("../model/vehicle-model")

module.exports.addVehicle = function (req, res) {         //API
    //db insert role
   

    let vehicle = new VehicleModel({
        vehicleNo: req.body.vehicleNo,
        parkingId: req.body.parkingId,
        vehicleType : req.body.vehicleType,
        user: req.body.user

    })

    vehicle.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: data.err })
        }
        else {
            res.json({ msg: "vehicle added successfully", status: 200, data: success })
        }
    })
}

//list
module.exports.getAllVehicles = function (req, res) {
    VehicleModel.find().populate("user").exec(function (err, vehicles) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all vehicles are displayed successfully", status: 200, data: vehicles })
        }
    })
}

module.exports.deleteVehicle = function(req, res){

    let vehicleId = req.params.vehicleId
    VehicleModel.deleteOne({"_id" : vehicleId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "vehicle is deleted successfully", status: 200, data: data })
        }
    })
}

module.exports.updateVehicle = function(req, res){
    let vehicleId = req.body.vehicleId
    let parkingId = req.body.parkingId

    VehicleModel.updateOne({"_id" : vehicleId},{ "parkingId": parkingId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "parking is updated successfully", status: 200, data: data })
        }
    })
}


//get vehicle by vehicle id
module.exports.getVehicleById = function(req, res){
    
    let vehicleId = req.params.vehicleId;
    
    VehicleModel.findById({"_id" : vehicleId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "vehicle is found successfully", status: 200, data: data })
        }
    })
}