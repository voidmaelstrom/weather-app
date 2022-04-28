const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = model("User", UserSchema);