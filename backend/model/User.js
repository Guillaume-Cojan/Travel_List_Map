/*const connection = require("../config");

const User = {};

User.addUser = (username, email, hashedPassword, handleResponse) => {
  connection.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [username, email, hashedPassword],
    (err, results) => {
      handleResponse(err, results);
    }
  );
};

User.getAll = (handleResponse) => {
  connection.query("SELECT * FROM users", (err, results) => {
    handleResponse(err, results);
  });
};

module.exports = User;*/