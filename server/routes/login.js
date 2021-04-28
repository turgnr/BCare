const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/Users");

let name = "";
let pass = "";
let users = [];
router.get("/login", async function (req, res, next) {
  console.log("GET- login", req.query);
  const users = await User.find({});
  var flag = false;
  users.every((element) => {
    console.log(req.query.UserName, "===", element.UserName);
    console.log(req.query.Password, "===", element.Password);
    if (
      req.query.UserName === element.UserName &&
      req.query.Password === element.Password
    ) {
        return flag = true;
    }
  });
   return flag? res.status(200).send('user is able'):res.status(400).send('user is not able');
});

router.post("/login", function (req, res, next) {
  console.log(req.body);
  name = req.body.userName;
  pass = req.body.pass;
  res.send(this.name + " " + this.pass);
});

router.put("/login/:id", function (req, res, next) {
  res.send("put");
});
router.delete("login/:id", function (req, res, next) {
  User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
    res.send(user);
  });
  res.send("delete");
});

module.exports = router;
