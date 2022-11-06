import { Geocoding } from "../model/geo";
import { Units } from "../model/units";
import { CurrentWeather } from "../model/weather";
import { baseFetch } from "./baseQuery";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const apiClient = {
  getGeoData: (city: string): Promise<Geocoding> => {
    const API_BASE = process.env.REACT_APP_GEO_API_URL;
    return baseFetch(`${API_BASE}/direct?q=${city}&limit=1&appid=${API_KEY}`);
  },
  getCurrentWeather: (
    lat: number,
    lon: number,
    units: Units
  ): Promise<CurrentWeather> => {
    const API_BASE = process.env.REACT_APP_WEATHER_API_URL;
    return baseFetch(
      `${API_BASE}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${units}`
    );
  },
};

export default apiClient;
