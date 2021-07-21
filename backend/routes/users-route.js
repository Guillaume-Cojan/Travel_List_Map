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
router.post("/", addUser, getById);
router.delete("/:id", deleteUser);

module.exports = router;
