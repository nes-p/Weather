import apiClient from "../api/api-client";
import { cities } from "../lib/constants/cities";

import { Units } from "../model/units";
import { CurrentWeather } from "../model/weather";

export async function getCityWeather(
  city: string,
  units: Units
): Promise<CurrentWeather> {
  const { lat, lon } = await apiClient.getGeoData(city);
  return apiClient.getCurrentWeather(lat, lon, units);
}

export async function getCitiesWeather(
  units: Units
): Promise<CurrentWeather[]> {
  const requests = cities.map((city) => getCityWeather(city, units));
  return await Promise.all(requests);
}
