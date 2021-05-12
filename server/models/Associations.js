const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AssociationsSchema = new Schema({
  Name: {
    type: String,
  },
  Address: {
    type: String,
  },
  PhoneNumber: {
    type: String,
  },
  Email: {
    type: String,
  },
  webSite: {
    type: String,
  },
});

const Associations = mongoose.model("Associations", AssociationsSchema);

module.exports = Associations;
