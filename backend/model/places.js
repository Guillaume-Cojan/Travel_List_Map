const pool = require("../config");

const Places = {};

Places.addNewPlace = (email, callback) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(
            "INSERT INTO places(email) VALUES (?)",
            [email],
            (err, result) => {
                connection.release();
                if (err) throw err;
                callback(err, result);
            }
        );
    });
};

module.exports = Places;
