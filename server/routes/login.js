const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/Users");

var name = null;
var pass = null;


router.get("/login", function (req, res, next) {
  if (null == name) {
    res.send("get");
  } else {
    res.send(name);
  }
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
