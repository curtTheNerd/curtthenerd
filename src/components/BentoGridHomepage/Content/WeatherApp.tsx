import { useState, useEffect } from "react";
import axios from "axios";

// 2 nested interfaces to control the cities name and backgroundColor statically and combine with API calls

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface CityWeather {
  name: string;
  color: string;
  weather: WeatherData;
}

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const displayedCities = [
  { name: "Leipzig", color: "lightgreen" },
  { name: "London", color: "orange" },
  { name: "St. Petersburg", color: "lightblue" },
];

const OpenWeatherAPI: React.FC = () => {
  const [weatherList, setWeatherList] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadWeather = async () => {
      setLoading(true);

      try {
        const results: CityWeather[] = [];

        for (const city of displayedCities) {
          const response = await axios.get<WeatherData>(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric&lang=en`
          );

          results.push({
            name: city.name,
            color: city.color,
            weather: response.data,
          });
        }

        setWeatherList(results);
      } catch (err) {
        setError("Failed to load weather data.");
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, []);

  // loading and error feedback -> optional, but

  return (
    <div className="min-h-screen p-6">
      <div className="grid grid-cols-3 gap-6">
        {weatherList.map(({ name, color, weather }) => (
          <div
            key={name}
            className="min-w-[250px] rounded-xl p-6 text-center"
            style={{ backgroundColor: color }}
          >
            <h2 className="text-2xl font-semibold">{weather.name}</h2>
            <p className="capitalize">{weather.weather[0].description}</p>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather icon"
              className="mx-auto"
            />

            <p className="text-3xl font-bold">
              {weather.main.temp.toFixed(1)} °C
            </p>
            <p>Feels like: {weather.main.feels_like.toFixed(1)} °C</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenWeatherAPI;

/*

previous mobile-app version
if (!API_KEY) {
  console.warn("No API-Key!");
}

const OpenWeatherAPI: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
      );
      setWeather(response.data);
    } catch (err) {
      setError("Place not found, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] min-w-[300px] max-w-[400px] rounded-xl bg-gradient-to-b from-sky-300 to-blue-950 p-6">
      <div className="flex flex-col items-center justify-center gap-3 pt-6">
        <input
          type="text"
          placeholder="Place (e.g. London)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-md border text-gray-800 border-gray-700 focus:outline-none"
        />
        <button
          onClick={getWeather}
          className="text-gray-800 hover:text-gray-200 bg-white/40 px-4 py-2 rounded-md hover:bg-sky-700 transition-all duration-300"
        >
          Show Weather
        </button>
      </div>

      {loading && <p className="text-gray-700 text-md">Loading...</p>}
      {error && (
        <p className="text-sky-100 font-semibold text-center pt-6">{error}</p>
      )}

      {weather && (
        <div className="w-full bg-white/40 backdrop-blur-sm rounded-lg shadow-lg p-4 mt-6 text-center">
          <h2 className="text-2xl font-semibold">{weather.name}</h2>
          <p className="capitalize text-gray-700">
            {weather.weather[0].description}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Wetter-Icon"
            className="mx-auto"
          />
          <p className="text-3xl font-bold text-sky-800">
            {weather.main.temp.toFixed(1)} °C
          </p>
          <p className="text-gray-800">
            Feels like: {weather.main.feels_like.toFixed(1)} °C
          </p>
          <p className="text-gray-800">Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}; */
