const User = require("../model/User");
const bcrypt = require("bcrypt");

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
    const {username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const handleResponseController = (err, result) => {
      if (err) {
        res.status(500).send("Error creating user");
      } else {
        res.send("User successfuly created");
      }
    }
    
    User.addNewUser(
        username,
        email,
        hashedPassword,
        handleResponseController);
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
