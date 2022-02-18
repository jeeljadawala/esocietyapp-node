const express = require("express")
const mongoose = require('mongoose')

const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const houseController = require("./controller/house-controller")

const app = express()
//middle ware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database

mongoose.connect('mongodb://localhost:27017/esociety',function(err){
  if(err){
    console.log("db connection failed .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls
app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})




//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users", userController.addUser)
app.get("/users", userController.getAllUsers)
app.delete("/users/:userId", userController.deleteUser)
app.put("/users", userController.updateUser)
app.get("/users/:userId", userController.userById)

//house
app.post("/houses",houseController.addHouse)
app.get("/houses",houseController.getAllHouses)
app.delete("/houses/:houseId",houseController.deleteHouse)
app.put("/houses",houseController.updateHouse)
app.get("/houses/:houseId",houseController.getHouseById)




//server
app.listen(3000,function(){
  console.log("server started on 3000");  
})