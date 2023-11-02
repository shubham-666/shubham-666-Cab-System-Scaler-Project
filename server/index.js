const mongoose = require("mongoose");
const express = require("express");
const dotenv=require('dotenv');
const bodyParser = require("body-parser");
const cors = require("cors");
const db_elements = require("./connect/getENV");
const landingTest = require("./routes/landingTest");
const pathGetter = require("./routes/pathGetter");
const logger_all = require("./connect/logg");
const cabGetter = require("./routes/cabGetter");
const userBooking = require("./routes/userBooking");
const AllCabBooking = require("./routes/allCabBookings");

const app = express();
dotenv.config();
// Middleware
app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Creating a connection with the database
mongoose.connect(db_elements.db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // All routes are activated here
    app.use("/test", landingTest);
    app.use("/path", pathGetter);
    app.use("/cab", cabGetter);
    app.use("/user", userBooking);
    app.use("/allcab", AllCabBooking);

    app.listen(db_elements.db_port, () => {
      logger_all.Logg.info("Connected to MongoDB (Atlas)!!");
      logger_all.Logg.warning(`Server running on port: ${db_elements.db_port}`);
    });
  })
  .catch((error) => {
    logger_all.Logg.error(error);
  });
