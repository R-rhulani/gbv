const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const ClientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  token: {
    type: String,
    required: true,
    unique: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  friends: [
    {
      name: { type: String },
      email: { type: String, unique: true },
      token: { type: String, unique: true },
    },
  ],
});
ClientSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Client", ClientSchema);
