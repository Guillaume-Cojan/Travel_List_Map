const express = require("express");
const router = express.Router();
const { addPlace } = require("../controller/places-controller");

router.post("/", addPlace);

module.exports = router;
