const express = require("express");
const router = express.Router();
const {
    getAll,
    getById,
    addUser,
    logUser,
    deleteUser,
} = require("../controller/users-controller");

router.get("/list", getAll);
router.get("/:id", getById);

//REGISTER
router.post("/register", addUser);

//LOGIN
router.post("/login", logUser);

router.delete("/:id", deleteUser);

module.exports = router;
