const express = require("express")
const mongoose = require('mongoose')
var cors = require('cors')

const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const houseController = require("./controller/house-controller")
const vehicleController=require("./controller/vehicle-controller")
const guardController = require("./controller/securityGuard-controller")
const guardAttendanceController = require("./controller/securityGuardAttendance-controller")
const deliverableController = require("./controller/deliverable-controller")
const categoryController = require("./controller/visitorCategory-controller")
const memberController = require("./controller/member-controller")
const visitorController = require("./controller/visitor-controller")
const childScheduleController = require("./controller/childSchedule-controller")

const app = express()

//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//cors
app.use(cors())

//for loading images
var publicDir = require('path').join(__dirname  ,'/public')
app.use(express.static(publicDir))


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

//login
app.post("/login",userController.login)

//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles/:roleId",roleController.updateRole)
app.get("/roles/:roleId", roleController.getRoleById)

//user
app.post("/users", userController.addUser)
app.get("/users", userController.getAllUsers)
app.delete("/users/:userId", userController.deleteUser)
app.put("/users/:userId", userController.updateUser)
app.get("/users/:userId", userController.getUserById)
app.post("/forgotpwd",userController.findUserByEmail)



//house
app.post("/houses",houseController.addHouse)
app.get("/houses",houseController.getAllHouses)
app.delete("/houses/:houseId",houseController.deleteHouse)
app.put("/houses/:houseId",houseController.updateHouse)
app.get("/houses/:houseId",houseController.getHouseById)

//vehicle
app.post("/vehicles",vehicleController.addVehicle)
app.get("/vehicles",vehicleController.getAllVehicles)
app.delete("/vehicles/:vehicleId",vehicleController.deleteVehicle)
app.put("/vehicles/:vehicleId",vehicleController.updateVehicle)
app.get("/vehicles/:vehicleId",vehicleController.getVehicleById)

//security guard
app.post("/guards", guardController.addGuard)
app.get("/guards", guardController.getAllGuards)
app.delete("/guards/:guardId", guardController.deleteGuard)
app.put("/guards/:guardId", guardController.updateGuard)
app.get("/guards/:guardId", guardController.getGuardById)
app.post("/guardAttendance", guardController.findGuardByUser)


//security guard attendence
app.post("/guardAttendances", guardAttendanceController.addGuardAttendance)
app.get("/guardAttendances", guardAttendanceController.getAllGuardAttendances)
app.delete("/guardAttendances/:guardAttendanceId", guardAttendanceController.deleteGuardAttendance)
app.put("/guardAttendances/:guardAttendanceId", guardAttendanceController.updateGuardAttendance)
app.get("/guardAttendances/:guardAttendanceId", guardAttendanceController.getGuardAttendanceById)
app.post("/countattendances",guardAttendanceController.getAttendance)


//deliverable
app.post("/deliverables", deliverableController.addDeliverable)
app.get("/deliverables", deliverableController.getAllDeliverables)
app.delete("/deliverables/:deliverableId", deliverableController.deleteDeliverable)
app.put("/deliverables/:deliverableId", deliverableController.updateDeliverable)
app.get("/deliverables/:deliverableId", deliverableController.getDeliverableById)

//visitor category
app.post("/categories",categoryController.addCategory)
app.get("/categories",categoryController.getAllCategories)
app.delete("/categories/:categoryId",categoryController.deleteCategory)
app.put("/categories/:categoryId",categoryController.updateCategory)
app.get("/categories/:categoryId", categoryController.getCategoryById)


//member
app.post("/members",memberController.addMember)
app.get("/members",memberController.getAllMembers)
app.delete("/members/:memberId",memberController.deleteMember)
app.put("/members/:memberId",memberController.updateMember)
app.get("/members/:memberId",memberController.getMemberById)

//visitor
app.post("/visitors", visitorController.addVisitor)
app.get("/visitors", visitorController.getAllVisitors)
app.delete("/visitors/:visitorId", visitorController.deleteVisitor)
app.put("/visitors/:visitorId", visitorController.updateVisitor)
app.get("/visitors/:visitorId", visitorController.getVisitorById)

//childSchedule
app.post("/childSchedules", childScheduleController.addChildSchedule)
app.get("/childSchedules", childScheduleController.getAllChildSchedules)
app.delete("/childSchedules/:childScheduleId", childScheduleController.deleteChildSchedule)
app.put("/childSchedules/:childScheduleId", childScheduleController.updateChildSchedule)
app.get("/childSchedules/:childScheduleId", childScheduleController.getChildScheduleById)



 app.listen(4000,function(){
   console.log("server started on 4000");  
 }) 