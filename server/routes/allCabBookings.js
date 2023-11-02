const express = require("express");
const Logger = require("./../connect/logg");
const ALLBOOKING = require("./../models/allBooking");
const AllCabBooking = express.Router();

// Get all cab bookings route - Fetch all cab bookings until the latest time for the admin
AllCabBooking.get("/get-all-cab", async (req, res) => {
    try {
        // Fetching all the records from the "ALLBOOKING" model for display
        const cabBookings = await ALLBOOKING.find().exec();
        Logger.Logg.success("All cab bookings fetched successfully");
        res.status(200).json(cabBookings);
    } catch (error) {
        Logger.Logg.error(error.message);
        res.status(500).json({ message: "An error occurred while fetching cab bookings." });
    }
});

module.exports = AllCabBooking;
