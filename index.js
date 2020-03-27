const express = require("express");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();

const middlewares = [bodyParser.urlencoded(), bodyParser.json()];
app.use(middlewares);



app.post("/api/login", (req, res) => {

  const { username, password } = req.body;

  const hash = bcrypt.hashSync(password, 10);

  res.send({ username, hash });
});


app.listen(5000);