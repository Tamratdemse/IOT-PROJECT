const express = require("express");
const bodyParser = require("body-parser");

const fieldRoutes = require("./routes/fieldRoutes");
const cropRoutes = require("./routes/crop");

const cors = require("cors");
const app = express();

app.use(cors());
// Middleware
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/fields", fieldRoutes);
app.use("/api/crop", cropRoutes);

module.exports = app;
