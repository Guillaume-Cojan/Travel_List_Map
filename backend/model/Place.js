const connection = require("../config");

const Place = {};

Place.getAllPlaces = (callback) => {
    connection.query("SELECT * FROM places", (err, result) => {
        callback(err, result);
    });
};

Place.getPlaceById = (id, callback) => {
    connection.query("SELECT * FROM places WHERE id=?", [id], (err, result) => {
        callback(err, result);
    });
};

Place.addNewPlace = (
    name,
    description,
    picture_url,
    rating,
    creator,
    creation_date,
    latitude,
    longitude,
    callback
) => {
    connection.query(
        "INSERT INTO places(name, description, picture_url, rating, creator, creation_date, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [
            name,
            description,
            picture_url,
            rating,
            creator,
            creation_date,
            latitude,
            longitude,
        ],
        (err, result) => {
            callback(err, result);
        }
    );
};

Place.deletePlaceById = (id, callback) => {
    connection.query("DELETE FROM places WHERE id=?", [id], (err, result) => {
        callback(err, result);
    });
};

module.exports = Place;

/*

Place.editPlace = (id, editedInfo, callback) => {
    connection.query(
        "UPDATE places SET ? WHERE id=?",
        [editedInfo, id],
        (err, results) => {
            callback(err, results);
        }
    );
};

Place.deletePlace = (id, callback) => {
    connection.query("DELETE FROM places WHERE id=?", [id], (err, results) => {
        callback(err, results);
    });
};

*/
