const HouseModel = require("../model/house-model")

module.exports.addHouse = function (req, res) {         //API
   
    //console.log(req.body.houseTitle)

    let house = new HouseModel({
        houseTitle: req.body.houseTitle
    })

    house.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: data.err })
        }
        else {
            res.json({ msg: "house added successfully", status: 200, data: success })
        }
    })
}

module.exports.getAllHouses = function (req, res) {
    HouseModel.find(function (err, houses) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all houses are displayed successfully", status: 200, data: houses })
        }
    })
}

module.exports.deleteHouse = function(req, res){

    let houseId = req.params.houseId
    HouseModel.deleteOne({"_id" : houseId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "house is deleted successfully", status: 200, data: data })
        }
    })
}

module.exports.updateHouse = function(req, res){
    let houseId = req.params.houseId
    let houseTitle = req.body.houseTitle

    HouseModel.updateOne({"_id" : houseId},{ "houseTitle": houseTitle}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "house is updated successfully", status: 200, data: data })
        }
    })
}


//get house by houseid
module.exports.getHouseById = function(req, res){
    
    let houseId = req.params.houseId;
    
    HouseModel.findById({"_id" : houseId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "house is found successfully", status: 200, data: data })
        }
    })
}