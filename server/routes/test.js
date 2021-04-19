const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Login = require("../models/Login");
const Users = require("../models/Users");
const bodyParser = require("body-parser");
const { db } = require("../models/Users");

const ListOfUsers = [];

router.get("/test", async function (req, res, next) {
  console.log("GET- test", ListOfUsers.length, req.query.param);
  if (ListOfUsers.length != 0) {
    return res.status(200).json(ListOfUsers);
  } else {
    const uuse = await Users.find({});
    res.status(200).json(uuse);
    // Users.find({}).then(function (users){res.status(400).json(users),
    //   ListOfUsers = users;
    //   console.log(users)});
  }
  {
    /*
  // if (Users.find().populate('userName','password').then((users)=>{
  //       res.status(200).json({
  //         users
  //       })
  // }).catch(err =>{
  //   res.status(500).json({
  //     err
  //   })
  // })) {
  //   console.log("login is: " + login.UserName + " " + login.Password);
  //   res.send({ userName: login.UserName, pass: login.Password,isValid:login.isValid });
  // } else {
  //   console.log(login1.UserName);
  //   res.send("local");
  // }
  */
  }
});
router.post("/test", function (req, res, next) {
  console.log("POST- test");
  console.log('req.body=>',req.body);
  [UserName, Password] = req.body;
  isValid = true;
  const userToLog = new Login({
    _id: new mongoose.Types.ObjectId(),
    UserName,
    Password,
    isValid: isValid ? isValid : true,
  });
  console.log("insert\n" + userToLog.UserName);
  userToLog.save();
  res.send("checked the user");
});

module.exports = router;