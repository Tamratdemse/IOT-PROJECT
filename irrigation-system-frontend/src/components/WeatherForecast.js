import { useState, useEffect } from "react";
import axios from "axios";

const WeatherForecast = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = "http://localhost:5000/api";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/weather?location=${location}`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching weather data");
        setLoading(false);
      }
    };

    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>{error}</p>;

  const { temperature, condition, icon, precipitation, humidity, wind, time } =
    weatherData;

  return (
    <div className="bg-white p-6 rounded shadow-md mt-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img src={icon} alt="Weather icon" className="w-16 h-16 object-cover" />
        <div className="text-5xl font-bold text-gray-800 flex items-baseline">
          {temperature}
          <span className="text-xl text-gray-500 ml-2">°C</span>
          <span className="text-xl text-gray-300 mx-2">|</span>
          <span className="text-xl text-gray-500">
            {(temperature * 9) / 5 + 32} °F
          </span>
        </div>
      </div>

      <div className="text-left">
        <p className="text-sm text-gray-500 mb-1">
          Precipitation: {precipitation}
        </p>
        <p className="text-sm text-gray-500 mb-1">Humidity: {humidity}%</p>
        <p className="text-sm text-gray-500">Wind: {wind} km/h</p>
      </div>

      <div className="text-right">
        <h3 className="text-lg font-bold text-gray-800">Weather</h3>
        <p className="text-sm text-gray-500">{time}</p>
        <p className="text-md text-gray-600">{condition}</p>
      </div>
    </div>
  );
};

export default WeatherForecast;
