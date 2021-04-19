const express = require("express");
const router = express.Router();
const Associations = require("../models/Associations");

router.get("/tablePage", async function (req, res, next) {
  const allAssociations = await Associations.find({});
  res.status(200).json(allAssociations);
});

router.post("/tablePage", function (req, res, next) {
  if (Associations.exists({ Name: req.body.Name })) {
    console.log(req.body.Name);
    return res.send("Association are exists");
  } else {
    Associations.create(req.body)
      .then(function (Association) {
        res.send(Association[0]);
        console.log("New " + req.body.Name + " is created");
      })
      .catch(next);
  }
});

router.put("/tablePage/:id", function (req, res, next) {
  res.send("put");
});
router.delete("/tablePage/:id", function (req, res, next) {
  Associations.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
    res.send(user);
  });
  res.send("delete");
});

module.exports = router;
