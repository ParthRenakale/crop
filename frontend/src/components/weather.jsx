import React, { useState } from "react";
import axios from "axios";

function WeatherWidget() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setWeatherData(null);
    try {
      const response = await axios.get(`http://localhost:4000/weather/${city}`);
      const data = response.data.data;
      // Check if expected properties exist in the returned data
      if (!data || !data.sys || !data.weather) {
        setError("Incomplete weather data received.");
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Weather Checker</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleCityChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Get Weather
        </button>
      </form>
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {weatherData && weatherData.sys && (
        <div className="mt-4 p-4 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-2">
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <div className="flex items-center">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt={weatherData.weather[0].description}
              className="w-16 h-16"
            />
            <div className="ml-4">
              <p className="text-2xl font-bold">
                {Math.round(weatherData.main.temp)}°C
              </p>
              <p className="text-gray-700 capitalize">
                {weatherData.weather[0].description}
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold">Feels Like:</span>{" "}
              {Math.round(weatherData.main.feels_like)}°C
            </p>
            <p>
              <span className="font-semibold">Humidity:</span>{" "}
              {weatherData.main.humidity}%
            </p>
            <p>
              <span className="font-semibold">Pressure:</span>{" "}
              {weatherData.main.pressure} hPa
            </p>
            <p>
              <span className="font-semibold">Wind Speed:</span>{" "}
              {weatherData.wind.speed} m/s
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherWidget;
