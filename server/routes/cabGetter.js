const express = require("express");
const Logger = require("./../connect/logg");
const CABS = require("./../models/Cabs");
const cabGetter = express.Router();

// Fetch cab details - Get all cab details with price per minute for user selection
cabGetter.get("/fetch-cab", async (req, res) => {
    try {
        // Fetch all cab details including price per minute for user display
        const cabDetails = await CABS.find().exec();
        res.status(200).json(cabDetails);
    } catch (error) {
        Logger.Logg.error(error.message);
        res.status(500).json({ message: "An error occurred while fetching cab details." });
    }
});

cabGetter.post("/add-cab", async(req, res) => {
    try{
        const {cab_name,
          cab_price,
          cab_image,
          cab_type,
          cab_seats} = req.body;
          console.log(req.body);
          const newCab = new CABS({
            cab_name, 
            cab_price,
            cab_image,
            cab_type,
            cab_seats});

          await newCab.save();
          res.status(200).json({message: "Cab data inserted successfully!"});
    }catch (error) {
        Logger.Logg.error(error.message);
        res.status(500).json({ message: "An error occurred while adding cab details." });
    }
})

module.exports = cabGetter;
