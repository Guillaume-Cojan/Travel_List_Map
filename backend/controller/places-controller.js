const Places = require("../model/places");

const addPlace = (req, res) => {
    Places.addNewPlace(req.body.email, (err, result) => {
        if (err) {
            res.status(500).send("Error adding place :(");
        } else {
            const id = result.insertId;
            req.id = id;
            res.send("place added");
        }
    });
};

module.exports = { addPlace };
