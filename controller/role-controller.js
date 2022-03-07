const RoleModel = require("../model/role-model")

module.exports.addRole = function (req, res) {         //API
    //db insert role
    console.log(req.body.roleName)

    let role = new RoleModel({
        roleName: req.body.roleName
    })

    role.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: data.err })
        }
        else {
            res.json({ msg: "role added successfully", status: 200, data: success })
        }
    })
}

module.exports.getAllRoles = function (req, res) {
    RoleModel.find(function (err, roles) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all roles are displayed successfully", status: 200, data: roles })
        }
    })
}

module.exports.deleteRole = function(req, res){

    let roleId = req.params.roleId
    RoleModel.deleteOne({"_id" : roleId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "role is deleted successfully", status: 200, data: data })
        }
    })
}

module.exports.updateRole = function(req, res){
    let roleId = req.params.roleId
    let roleName = req.body.roleName

    RoleModel.updateOne({"_id" : roleId},{ "roleName": roleName}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "role is updated successfully", status: 200, data: data })
        }
    })
}

module.exports.getRoleById = function(req, res){
    
    let roleId = req.params.roleId;
    
    RoleModel.findById({"_id" : roleId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "role is found successfully", status: 200, data: data })
        }
    })
}