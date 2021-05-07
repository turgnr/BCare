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
  for(i=0;i<users.length;i++){
    if (
      req.query.UserName === users[i].UserName &&
      req.query.Password === users[i].Password
    ) {
         flag = true;
         break;// if the details of user are exist we give him to connect to the app
    }
  };
   return flag? res.status(200).send('user is able'):res.status(203).send('user is not able');
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
