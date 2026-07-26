import { useState, useEffect, useRef } from "react";
import axios from "axios";

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

const getRandomLightColor = () => {
  const r = Math.floor(150 + Math.random() * 105);
  const g = Math.floor(150 + Math.random() * 105);
  const b = Math.floor(150 + Math.random() * 105);
  return `rgb(${r}, ${g}, ${b})`;
};

const initialCities = [
  { name: "Leipzig", color: "rgb(170, 220, 180)" },
  { name: "London", color: "rgb(255, 200, 120)" },
  { name: "St. Petersburg", color: "rgb(170, 210, 240)" },
];

const OpenWeatherAPI: React.FC = () => {
  const [weatherList, setWeatherList] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newCity, setNewCity] = useState("");

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const loadWeather = async (cities: { name: string; color: string }[]) => {
    setLoading(true);
    try {
      const results: CityWeather[] = [];
      for (const city of cities) {
        const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric&lang=en`,
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

  useEffect(() => {
    loadWeather(initialCities);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newCity) return;
    if (weatherList.length > 8) {
      alert(
        "Maximum amount of cities reached. Please be reasonable with the amount of requests, minding that we are using a limited API!",
      );
      return;
    }

    const color = getRandomLightColor();

    try {
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${API_KEY}&units=metric&lang=en`,
      );
      const cityWeather: CityWeather = {
        name: newCity,
        color,
        weather: response.data,
      };
      setWeatherList([...weatherList, cityWeather]);
      setNewCity("");
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (err) {
      alert("City not found or API error");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="w-full max-w-360 mx-auto min-h-screen flex items-center justify-start flex-col space-y-4">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 w-[95%] mx-auto">
        {weatherList.map(({ name, color, weather }) => (
          <div
            key={name}
            className="w-full min-h-[130px] flex items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5 rounded-md overflow-hidden"
            style={{ background: color }}
          >
            <div className="min-w-0 flex-1 space-y-0.5">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-start truncate">
                {weather.name}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap">
                {weather.main.temp.toFixed(1)} °C
              </p>
              <p className="text-sm sm:text-base whitespace-nowrap">
                Feels like: {weather.main.feels_like.toFixed(1)} °C
              </p>
              <p className="text-sm sm:text-base whitespace-nowrap">
                Humidity: {weather.main.humidity}%
              </p>
            </div>
            <div className="flex flex-col items-center shrink-0">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="Weather icon"
                className="mx-auto w-14 h-14 sm:w-20 sm:h-20"
              />
              <p className="capitalize text-sm sm:text-base text-center">
                {weather.weather[0].description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div ref={bottomRef} />

      <form
        onSubmit={handleSubmit}
        className="w-[90%] pt-6 pb-24 flex flex-col space-y-3"
      >
        <label htmlFor="addCity" className="text-lg">
          Add City:
        </label>
        <input
          type="text"
          id="addCity"
          value={newCity}
          onChange={(event) => setNewCity(event.target.value)}
          placeholder="City name"
          className="w-full max-w-sm p-2 border border-gray-400 rounded"
        />
        <button
          type="submit"
          className="w-28 bg-gray-300 hover:bg-gray-700 text-gray-800 hover:text-gray-200 rounded-md py-2 transition-all duration-300"
        >
          Add
        </button>
      </form>
      <p className="w-[90%] text-xl">Maximum 9</p>
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
