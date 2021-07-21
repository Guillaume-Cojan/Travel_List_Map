const Users = require("../model/users");

const addUser = (req, res) => {
    Users.addNewUser(req.body.email, (err, result) => {
        if (err) {
            res.status(500).send("Error adding user :(");
        } else {
            const id = result.insertId;
            req.id = id;
            res.send("user added");
        }
    });
};

module.exports = { addUser };
