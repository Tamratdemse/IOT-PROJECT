const express = require("express");
const fetchWeatherData = require("../utils/weatherAPI");
const router = express.Router();

// Weather route to get weather data by location
router.get("/", async (req, res) => {
  const location = req.query.location;

  if (!location) {
    return res.status(400).json({ error: "Location is required" });
  }

  try {
    const weatherData = await fetchWeatherData(location);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

module.exports = router;
