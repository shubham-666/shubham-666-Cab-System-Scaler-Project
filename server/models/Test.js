const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// Define the schema for the TEST model
const testSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
});

// Create the "TEST" model using the schema
const TEST = model("TEST", testSchema);

module.exports = TEST;
