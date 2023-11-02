const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// Define the schema for the "user" model
const userSchema = new Schema({
  user_email: {
    type: String,
  },
  user_cabs: {
    type: [Object],
  },
});

// Create the "user" model using the schema
const User = model("user", userSchema);

module.exports = User;
