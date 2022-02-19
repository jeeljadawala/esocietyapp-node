const CategoryModel = require("../model/visitorCategory-model")

module.exports.addCategory = function (req, res) {         //API
    //db insert role
    //console.log(req.body.roleName)

    let category = new CategoryModel({
        categoryName: req.body.categoryName
    })

    category.save(function (err, success) {
        if (err) {
            console.log(err);
            res.json({ msg: "Something Went Wrong", status: -1, data: data.err })
        }
        else {
            res.json({ msg: "visitor category added successfully", status: 200, data: success })
        }
    })
}

module.exports.getAllCategories = function (req, res) {
    CategoryModel.find(function (err, categories) {
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "all categories are displayed successfully", status: 200, data: categories })
        }
    })
}

module.exports.deleteCategory = function(req, res){

    let categoryId = req.params.roleId
    CategoryModel.deleteOne({"_id" : categoryId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "visitor category is deleted successfully", status: 200, data: data })
        }
    })
}

module.exports.updateCategory = function(req, res){
    let categoryId = req.body.categoryId
    let categoryName = req.body.categoryName

    CategoryModel.updateOne({"_id" : categoryId},{ "roleName": categoryName}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "visitor category is updated successfully", status: 200, data: data })
        }
    })
}

module.exports.categoryById = function(req, res){
    
    let categoryId = req.params.categoryId;
    
    CategoryModel.findById({"_id" : categoryId}, function(err, data){
        if (err) {
            res.json({ msg: "Something Went Wrong", status: -1, data: err })
        }
        else {
            res.json({ msg: "visitor category is found successfully", status: 200, data: data })
        }
    })
}