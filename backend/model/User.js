const connection = require("../config");

const User = {};

User.getAllUsers = (callback) => {
    connection.query("SELECT * FROM users", (err, result) => {
        callback(err, result);
    });
};

User.getUserById = (id, callback) => {
    connection.query("SELECT * FROM users WHERE id=?", [id], (err, result) => {
        callback(err, result);
    });
};

User.addNewUser = (
    username,
    email,
    password,
    callback
) => {
    connection.query(
        "INSERT INTO users(username, email, password) VALUES (?, ?, ?)",
        [username, email, password],
        (err, result) => {
            callback(err, result);
        }
    );
};

User.deleteUserById = (id, callback) => {
    connection.query("DELETE FROM users WHERE id=?", [id], (err, result) => {
        callback(err, result);
    });
};

module.exports = User;

