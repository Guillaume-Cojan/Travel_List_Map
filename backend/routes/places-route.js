const express = require("express");
const router = express.Router();
const {
    getAll,
    getById,
    addPlace,
    deletePlace,
} = require("../controller/places-controller");

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", addPlace, getById);
router.delete("/:id", deletePlace);

module.exports = router;
