const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

const placesRouter = require("./routes/places-route");
const usersRouter = require("./routes/users-route");

app.use("/places", placesRouter);
app.use("/users", usersRouter);

/*const authentication = (req, res, next) => {
    if (!req.cookies.token) {
        res.send("something went wrong :(");
    } else {
        jwt.verify(req.cookies.token, "your-secret-key", (err, decoded) => {
            if (err) {
                res.send("wrong access");
            }
            req.id = decoded.id;
            next();
        });
    }
};

app.get("/secret", authentication, (req, res, next) => {
    res.send("Welcome to the secret route");
});

app.get("/users", authentication, getAllUsers);*/

app.listen(port, () => console.log(`server running on port ${port}`));
