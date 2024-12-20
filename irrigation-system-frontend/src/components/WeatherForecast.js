const WeatherForecast = () => {
  const todayWeather = {
    temperature: 21,
    condition: "Mostly cloudy",
    icon: "/asset/todayweather.jpg",
    precipitation: "0%",
    humidity: "40%",
    wind: "10 km/h",
    time: "Wednesday 3:00 PM",
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mt-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src={todayWeather.icon}
          alt="Weather icon"
          className="w-16 h-16 object-cover"
        />
        <div className="text-5xl font-bold text-gray-800 flex items-baseline">
          {todayWeather.temperature}
          <span className="text-xl text-gray-500 ml-2">°C</span>
          <span className="text-xl text-gray-300 mx-2">|</span>
          <span className="text-xl text-gray-500">°F</span>
        </div>
      </div>

      <div className="text-left">
        <p className="text-sm text-gray-500 mb-1">
          Precipitation: {todayWeather.precipitation}
        </p>
        <p className="text-sm text-gray-500 mb-1">
          Humidity: {todayWeather.humidity}
        </p>
        <p className="text-sm text-gray-500">Wind: {todayWeather.wind}</p>
      </div>

      <div className="text-right">
        <h3 className="text-lg font-bold text-gray-800">Weather</h3>
        <p className="text-sm text-gray-500">{todayWeather.time}</p>
        <p className="text-md text-gray-600">{todayWeather.condition}</p>
      </div>
    </div>
  );
};

export default WeatherForecast;
