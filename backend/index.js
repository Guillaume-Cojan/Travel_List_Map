const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./config");

const port = process.env.PORT || 5000;

const usersRoute = require("./routes/users-route.js");
const placesRoute = require("./routes/places-route.js");
const addUserRoute = require("./routes/users-route.js");
const addPlaceRoute = require("./routes/places-route.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/users", usersRoute, addUserRoute);
app.use("/places", placesRoute, addPlaceRoute);

app.listen(port, (err) => {
    if (err) throw new Error("Server is not working! :(");
    console.log(`Server running on port ${port} 🚀`);
});
