const User = require("../model/User");
const bcrypt = require("bcrypt");
const connection = require("../config");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const getAll = (req, res, next) => {
    User.getAllUsers((err, result) => {
        if (err) {
            res.status(500).send("error retrieving users from DB");
        } else {
            res.send(result);
        }
    });
};

const getById = (req, res, next) => {
    User.getUserById(req.params.id, (err, result) => {
        if (err) {
            res.status(500).send("error retrieving user from DB");
        } else {
            res.send(result);
        }
    });
};

//REGISTER
const addUser = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const handleResponseController = (err, result) => {
        if (err) {
            res.status(500).send("Error creating user");
        } else {
            res.send("User successfuly created");
        }
    };

    User.addNewUser(username, email, hashedPassword, handleResponseController);
};

//LOGIN
const logUser = (req, res, next) => {
    const { username, password } = req.body;
    connection.query(
        "SELECT * FROM users WHERE username = ?",
        [username],
        async (err, result) => {
            if (err) {
                res.status(500).send("No such user registered.");
            } else {
                const matchPassword = await bcrypt.compare(
                    password,
                    result[0].password
                );
                if (matchPassword && username === result[0].username) {
                    res.status(200)
                        .cookie("login", true, {
                            httpOnly: true,
                            expires: new Date(Date.now() + 30000),
                        })
                        .json(
                            `Welcome ${result[0].username}! You've successfully logged in.`
                        );
                } else {
                    res.status(401).send("Wrong credentials");
                }
            }
        }
    );
};

const deleteUser = (req, res, next) => {
    User.deleteUserById(req.params.id, (err, result) => {
        if (err) {
            res.status(500).send("error deleting user");
        } else {
            res.send(result);
        }
    });
};

module.exports = { getAll, getById, addUser, logUser, deleteUser };
