const mongoose = require("mongoose");
const User = require("../models/Users");

module.exports = {
  getAllUsers: (res, get) => {
    User.find()
      .populate("UserName", "Password")
      .then((user) => {
        res.status(200).json({
          users,
        });
      })
      .catch((error) => {
        res.status(500).json({
          error,
        });
      });
  },
  
};
