const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.get("/RegisterPage", async function (req, res, next) {
  const uuse = await User.find({});
  res.status(200).json(uuse);
});

router.post("/RegisterPage", function (req, res, next) {
  User.exists({ UserName: req.body.UserName })
    .then((respo) => {
      if (respo) {
        return res.send("user are exists");
      } else {
        User.create(req.body).then(function (user) {
          res.status(200);
          console.log("user " + req.body.UserName + " is created");
        });
      }
    })
    .catch(next);
});

router.put("/RegisterPage/:id", function (req, res, next) {
  res.send("put");
});

router.delete("/RegisterPage/:id", function (req, res, next) {
  User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
    res.send(user);
  });
  res.send("delete");
});

module.exports = router;
