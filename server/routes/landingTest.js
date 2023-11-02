const express = require("express");
const TEST = require("./../models/Test");
const Logger = require("./../connect/logg");
const landingTest = express.Router();
const { spawn } = require("child_process");

// Testing route for the backend to check if it's running successfully
landingTest.get("/landingTest", (req, res) => {
    res.status(200).send("API is running successfully!");
});

module.exports = landingTest;
