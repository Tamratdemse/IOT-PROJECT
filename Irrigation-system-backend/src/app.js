const express = require("express");
const bodyParser = require("body-parser");

const fieldRoutes = require("./routes/fieldRoutes");
const cropRoutes = require("./routes/crop");
const weather = require("./routes/weather");
const AI = require("./routes/AIassistance");
const arduino = require("./routes/Arduino");

const cors = require("cors");
const app = express();

app.use(cors());
// Middleware
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/fields", fieldRoutes);
app.use("/api/crop", cropRoutes);
app.use("/api/weather", weather);
app.use("/api/AI-assistace", AI);
app.use("/api/arduino", arduino);

module.exports = app;
