import axios from "axios";
const API_KEY = process.env.API_KEY;

export const getWeather = async (req, res) => {
  const { city } = req.params;

  try {
    // const lat=18.6445;
    // const lon=73.7595;
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    );
    

    const weatherData = response.data;

    console.log(weatherData);
    

    res.status(200).json({
      source: "api",
      data: weatherData,
    });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ error: "City not found" });
    } else {
      res.status(500).json({ error: "Failed to fetch weather data" });
      console.log(error.response.data);
    }
  }
};