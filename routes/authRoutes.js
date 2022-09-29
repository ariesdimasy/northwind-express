const express = require("express");
const router = express.Router();

const controller = require("../controllers");

router.post("/login", controller.employeeController.login);
router.post("/register", controller.employeeController.register);

module.exports = router;
