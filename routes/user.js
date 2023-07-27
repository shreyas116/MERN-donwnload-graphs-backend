const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
//const {deleteUser}=require("../controller/deleteUser");
//const {updateUser}=require("../controller/updateUser");
const {updateUser} =require("../controller/updateUser");
const deleteController = require('../controller/deleteUser');

router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.delete("/deleteData/:id", deleteController.deleteData);
router.put("/updateUser/:id", updateUser);

module.exports = router;
