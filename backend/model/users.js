const pool = require("../config");

const Users = {};

Users.addNewUser = (email, callback) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(
            "INSERT INTO users(email) VALUES (?)",
            [email],
            (err, result) => {
                connection.release();
                if (err) throw err;
                callback(err, result);
            }
        );
    });
};

module.exports = Users;
