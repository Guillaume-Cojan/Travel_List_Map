const express = require("express");
const connection = require("../config");
const router = express.Router();

//const { createUser, getAllUsers } = require("../controller/users-controller");

//router.get("/list", getAllUsers);
router.get("/list", (req, res) => {
    connection.query("SELECT * FROM users", (err, results) => {
        if (err) {
            res.status(500).send("Error retrieving users from DB");
        } else {
            res.send(results);
        }
    });
});

//router.post("/signup", createUser);
/*router.post("/signup", (req, res) => {
    res.send(users);
});*/

module.exports = router;
