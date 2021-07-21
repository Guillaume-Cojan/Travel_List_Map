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

//REGISTER
User.addNewUser = (username, email, hashedpassword, callback) => {
    connection.query(
        "INSERT INTO users(username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedpassword],
        (err, result) => {
            callback(err, result);
        }
    );
};

//LOGIN
/*User.loginUser = (
  username,
  callback
) => {
  connection.query(
      "SELECT * FROM users WHERE username = ?",
      [username], 
      (err, result) => {
          callback(err, result);
      }
  );
};*/

User.deleteUserById = (id, callback) => {
    connection.query("DELETE FROM users WHERE id=?", [id], (err, result) => {
        callback(err, result);
    });
};

module.exports = User;
