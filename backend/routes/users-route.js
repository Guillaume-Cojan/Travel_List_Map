const express = require("express");
const router = express.Router();
const {
    getAll,
    getById,
    addUser,
    deleteUser,
} = require("../controller/users-controller");

router.get("/list", getAll);
router.get("/:id", getById);

//REGISTER
router.post("/register", addUser);

router.delete("/:id", deleteUser);

module.exports = router;
