const User = require("../model/User");

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
    if (req.params.id) {
        User.getUserById(req.params.id, (err, result) => {
            if (err) {
                res.status(500).send("error retrieving user from DB");
            } else {
                res.send(result);
            }
        });
    } else {
        User.getUserById(req.id, (err, result) => {
            if (err) {
                res.status(500).send("error retrieving user from DB");
            } else {
                res.send(result);
            }
        });
    }
};

const addUser = (req, res, next) => {
    User.addNewUser(
        req.body.username,
        req.body.email,
        req.body.password,
        (err, result) => {
            if (err) {
                res.status(500).send("Error adding user :(");
            } else {
                const id = result.insertId;
                req.id = id;
                next();
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

module.exports = { getAll, getById, addUser, deleteUser };
