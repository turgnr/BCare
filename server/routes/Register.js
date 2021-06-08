const express = require("express");
const Users = require("../models/Users");
const router = express.Router();
const User = require("../models/Users");

router.get("/RegisterPage", async function (req, res, next) {
  const uuse = await User.find({});
  res.status(200).json(uuse);
});

router.post("/RegisterPage", function (req, res, next) {
  User.exists({ UserName: req.body.UserName }).then((respo) => {
    if (respo) {
      return res.send("user are exists");
    } else {
      const newUser = new Users({
        UserName: req.body.UserName,
        Email: req.body.Email,
        Age: req.body.Age,
        PhonNumber: req.body.PhonNumber,
        Password: req.body.Password,
        Address: {
          lat: req.body.Address.lat,
          lon: req.body.Address.lot,
        },
        isValid: req.body.isValid,
      });
      newUser
        .save()
        .then((result) => {
          console.log(result);
          res.status(200).send("user is creat");
        })
        .catch((err) => {
          console.log("err", err.response.data);
        });
    }
  });
});

router.post("/RegisterPage:id", function (req, res, next) {
  User.exists({ _id: req.body.id }).then((respo) => {
    if (respo) {
      const newUser = new Users({
        UserName: req.body.UserName,
        Email: req.body.Email,
        Age: req.body.Age,
        PhonNumber: req.body.PhonNumber,
        Password: req.body.Password,
        Address: {
          lat: req.body.Address.lat,
          lon: req.body.Address.lot,
        },
        isValid: req.body.isValid,
      });
      newUser
        .save()
        .then((result) => {
          console.log(result);
          res.status(200).send("user is update");
        })
        .catch((err) => {
          console.log("err", err.response.data);
        });
      } else {
        return res.send("user are not exists");
    }
  });
});

router.get("/RegisterPage/:id", function (req, res, next) {
  
  User.find({_id:req.params.id}).then((user)=>{
    res.send(user);
  });
});

router.delete("/RegisterPage/:id", function (req, res, next) {
  User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
    res.send(user);
  });
  res.send("delete");
});

module.exports = router;
