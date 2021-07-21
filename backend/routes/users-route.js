const express = require("express");
const router = express.Router();
const { addUser } = require("../controller/users-controller.js");

router.post("/", addUser);

module.exports = router;
