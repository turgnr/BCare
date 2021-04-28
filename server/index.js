const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const tablePage = require("./routes/tablePage");
const login = require("./routes/login");
const register = require("./routes/Register");
const test = require("./routes/test");


app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

/*
 * section for connection and handle with DB
 */
const uriDB = `mongodb+srv://${process.env.MONGOUSER}:${process.env.MONGOSOPASS}@startc.0drvr.mongodb.net/Bcare?retryWrites=true&w=majority`;

const db = mongoose.connect(uriDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).finally(console.log("db is connected"));

//TODO: connect the controller to USER models and try check the response from DB about specific user name & pass

/*
 *END DB
 */

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

//Allowing "node.js" through the private network windows firewall - public and private
//use route for login screen
app.use(login);

//use route for RegisterPage screen
app.use(register);

//use route for test screen
app.use(test);

//use route for tablePage screen
app.use(tablePage);

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});
app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(8081, () => {
  console.log("connect to Server in port 8081");
});
