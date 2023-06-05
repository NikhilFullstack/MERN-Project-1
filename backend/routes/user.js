const express = require("express");
const router = express.Router();
const { createUser } = require("../controller/createUser");
const { getUser } = require("../controller/getUsers");
const { updateUser } = require("../controller/updateUser");
const { deleteAllUsers,deleteUser } = require("../controller/deleteAllUser");
router.post("/createUser", createUser);
router.get("/getallUsers", getUser);
router.put("/updateUsers/:id",updateUser);   
router.delete("/deleteAllUsers",deleteAllUsers);
router.delete("/deleteUser/:id",deleteUser);


module.exports = router;
