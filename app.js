const express = require("express")
const mongoose = require('mongoose')

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
app.put("/roles",roleController.updateRole)
app.get("/roles/:roleId", roleController.getRoleById)

//user
app.post("/users", userController.addUser)
app.get("/users", userController.getAllUsers)
app.delete("/users/:userId", userController.deleteUser)
app.put("/users", userController.updateUser)
app.get("/users/:userId", userController.getUserById)


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
app.get("/guards/:guardId", guardController.getGuardById)


//security guard attendence
app.post("/guardAttendances", guardAttendanceController.addGuardAttendance)
app.get("/guardAttendances", guardAttendanceController.getAllGuardAttendances)
app.delete("/guardAttendances/:guardAttendanceId", guardAttendanceController.deleteGuardAttendance)
app.put("/guardAttendances", guardAttendanceController.updateGuardAttendance)
app.get("/guardAttendances/:guardAttendanceId", guardAttendanceController.getGuardAttendanceById)


//deliverable
app.post("/deliverables", deliverableController.addDeliverable)
app.get("/deliverables", deliverableController.getAllDeliverables)
app.delete("/deliverables/:deliverableId", deliverableController.deleteDeliverable)
app.put("/deliverables", deliverableController.updateDeliverable)
app.get("/deliverables/:deliverableId", deliverableController.getDeliverableById)

//visitor category
app.post("/categories",categoryController.addCategory)
app.get("/categories",categoryController.getAllCategories)
app.delete("/categories/:categoryId",categoryController.deleteCategory)
app.put("/categories",categoryController.updateCategory)
app.get("/categories/:categoryId", categoryController.getCategoryById)


//member
app.post("/members",memberController.addMember)
app.get("/members",memberController.getAllMembers)
app.delete("/members/:memberId",memberController.deleteMember)
app.put("/members",memberController.updateMember)
app.get("/members/:memberId",memberController.getMemberById)

//visitor
app.post("/visitors", visitorController.addVisitor)
app.get("/visitors", visitorController.getAllVisitors)
app.delete("/visitors/:visitorId", visitorController.deleteVisitor)
app.put("/visitors", visitorController.updateVisitor)
app.get("/visitors/:visitorId", visitorController.getVisitorById)

//childSchedule
app.post("/childSchedules", childScheduleController.addChildSchedule)
app.get("/childSchedules", childScheduleController.getAllChildSchedules)
app.delete("/childSchedules/:childScheduleId", childScheduleController.deleteChildSchedule)
app.put("/childSchedules", childScheduleController.updateChildSchedule)
app.get("/childSchedules/:childScheduleId", childScheduleController.getChildScheduleById)


//server keya
/*app.listen(4000,function(){
  console.log("server started on 4000");  
})
*/

//server jeel
 app.listen(3000,function(){
   console.log("server started on 3000");  
 }) 