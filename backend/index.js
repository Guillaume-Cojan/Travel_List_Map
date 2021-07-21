const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 8000;

const connection = require("./config");
//const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cookieParser());

const placesRouter = require("./routes/places-route");
const usersRouter = require("./routes/users-route");
//const { getAllUsers } = require("./controller/users-controller");

app.use("/places", placesRouter);
app.use("/users", usersRouter);

/*app.post("/login", (req, res, next) => {
    const { username, email, password } = req.body;
    connection.query(
        "SELECT * FROM user WHERE username = ?",
        [username],
        async (err, results) => {
            if (err) {
                res.status(500).send(`Error retrieving user: ${err}`);
            } else {
                const isPasswordEqual = await bcrypt.compare(
                    password,
                    results[0].password
                );
                if (isPasswordEqual && username === results[0].username) {
                    const token = jwt.sign(
                        { id: results[0].id },
                        "your-secret-key"
                    );

                    res.status(200)
                        .cookie("token", token, {
                            httpOnly: true,
                        })
                        .json({ id: results[0].id });
                } else {
                    res.status(401).send("Wrong credentials");
                }
            }
        }
    );
});*/

const authentication = (req, res, next) => {
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

/*app.get("/secret", authentication, (req, res, next) => {
    res.send("Welcome to the secret route");
});

app.get("/users", authentication, getAllUsers);*/

app.listen(port, () => console.log(`server running on port ${port}`));
