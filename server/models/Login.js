const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  UserName: {
    type: String,
    required: [true, "user name is must value"],
  },
  Password: {
    type: String,
    required: [true, "password is must value"],
  },
  isValid: {
    type: Boolean,
    default: false,
  },
});




const Login = mongoose.model("Login", LoginSchema);

module.exports = Login;
