const axios = require("axios");
require("dotenv").config();
// Define your API key and base URL for OpenWeatherMap
const apiKey = process.env.apiKey;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Fetch weather data from OpenWeatherMap API.
 * @param {string} location - The location (city name) for which to fetch weather.
 * @returns {Promise<object>} - The weather data.
 */
const fetchWeatherData = async (location) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        q: location,
        units: "metric", // Use Celsius for temperature
        appid: apiKey,
      },
    });

    // Extract relevant data from the response
    const { main, weather, wind, rain } = response.data;
    return {
      temperature: main.temp,
      condition: weather[0].description,
      icon: `https://openweathermap.org/img/wn/${weather[0].icon}.png`,
      precipitation: rain ? `${rain["1h"]}%` : "0%",
      humidity: main.humidity,
      wind: wind.speed,
      time: new Date().toLocaleString(),
    };
  } catch (error) {
    throw new Error("Error fetching weather data");
  }
};

module.exports = fetchWeatherData;
