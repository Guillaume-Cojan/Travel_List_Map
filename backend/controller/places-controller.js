const Place = require("../model/Place");

const getAll = (req, res, next) => {
    Place.getAllPlaces((err, result) => {
        if (err) {
            res.status(500).send("error retrieving places from DB");
        } else {
            res.send(result);
        }
    });
};

const getById = (req, res, next) => {
    if (req.params.id) {
        Place.getPlaceById(req.params.id, (err, result) => {
            if (err) {
                res.status(500).send("error retrieving place from DB");
            } else {
                res.send(result);
            }
        });
    } else {
        Place.getPlaceById(req.id, (err, result) => {
            if (err) {
                res.status(500).send("error retrieving place from DB");
            } else {
                res.send(result);
            }
        });
    }
};

const addPlace = (req, res, next) => {
    Place.addNewPlace(
        req.body.name,
        req.body.description,
        req.body.picture_url,
        req.body.rating,
        req.body.creator,
        req.body.creation_date,
        (err, result) => {
            if (err) {
                res.status(500).send("Error adding place :(");
            } else {
                const id = result.insertId;
                req.id = id;
                next();
            }
        }
    );
};

const deletePlace = (req, res, next) => {
    Place.deletePlaceById(req.params.id, (err, result) => {
        if (err) {
            res.status(500).send("error deleting place");
        } else {
            res.send(result);
        }
    });
};

module.exports = { getAll, getById, addPlace, deletePlace };
