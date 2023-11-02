

const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// Define the schema for the ALLBOOKING model
const allBookingSchema = new Schema({
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
  user_email: {
    type: String,
  },
  booking_time: {
    type: Date,
    default: Date.now,
  },
});

// Create the "ALLBOOKING" model using the schema
const ALLBOOKING = model("ALLBOOKING", allBookingSchema);

module.exports = ALLBOOKING;
