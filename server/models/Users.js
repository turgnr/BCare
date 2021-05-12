const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const  UsersSchema = new Schema({
 // _id: mongoose.Schema.Types.ObjectId,
  UserName: {
    type: String,
    required: [true, "user name is must value"],
    unique:true //make the UserName to unique value
  },
  Email: String,
  Age: Number,
  PhonNumber: Number,
  Password: {
    type: String,
    required: [true, "must have a password"],
  },
  Address: {
    lat: Number,
    lon: Number,
  },
  isValid: Boolean,
});

module.exports = mongoose.model("Users", UsersSchema);
