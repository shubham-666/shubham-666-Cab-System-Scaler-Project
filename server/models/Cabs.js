const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// Define the schema for the CABS model
const cabSchema = new Schema({
  cab_name: {
    type: String,
  },
  cab_price: {
    type: Number,
  },
  cab_image: {
    type: String,
  },
  cab_type: {
    type: String,
  },
  cab_seats: {
    type: Number,
  },
});

// Create the "CABS" model using the schema
const CABS = model("CABS", cabSchema);

module.exports = CABS;
