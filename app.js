const express = require("express")
const mongoose = require('mongoose')

const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const houseController = require("./controller/house-controller")
const vehicleController=require("./controller/vehicle-controller")
const guardController = require("./controller/securityGuard-controller")
const deliverableController = require("./controller/deliverable-controller")

const app = express()

//middle ware 
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
app.get("/roles/:roleId", roleController.roleById)

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

//vehicle
app.post("/vehicles",vehicleController.addVehicle)
app.get("/vehicles",vehicleController.getAllVehicles)
app.delete("/vehicles/:vehicleId",vehicleController.deleteVehicle)
app.put("/vehicles",vehicleController.updateVehicle)
app.get("/vehicles/:vehicleId",vehicleController.getVehicleById)

//security guard
app.post("/guards", guardController.addGuard)
app.get("/guards", guardController.getAllGuards)
app.delete("/guards/:guardId", guardController.deleteGuard)
app.put("/guards", guardController.updateGuard)
app.get("/guards/:guardId", guardController.guardById)

//deliverable
app.post("/deliverables", deliverableController.addDeliverable)
app.get("/deliverables", deliverableController.getAllDeliverables)
app.delete("/deliverables/:deliverableId", deliverableController.deleteDeliverable)
app.put("/deliverables", deliverableController.updateDeliverable)
app.get("/deliverables/:deliverableId", deliverableController.getDeliverableById)




//server
app.listen(3000,function(){
  console.log("server started on 3000");  
})

/*app.listen(4000,function(){
  console.log("server started on 4000");  
}) */