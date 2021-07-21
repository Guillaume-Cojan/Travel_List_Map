const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./config");

const port = process.env.PORT || 5000;

const usersRoute = require("./routes/route-users.js");
const placesRoute = require("./routes/route-places.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/places", placesRoute);
app.use("/users", usersRoute);

app.listen(port, (err) => {
    if (err) throw new Error("Server is not working! :(");
    console.log(`Server running on port ${port} 🚀`);
});
