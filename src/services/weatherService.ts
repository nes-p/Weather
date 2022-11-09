import apiClient from "../api/api-client";
import { cities } from "../lib/constants/cities";
import { Geocoding } from "../model/geo";

import { Units } from "../model/units";
import { CurrentWeather } from "../model/weather";

export async function getCityWeather(
  city: string,
  units: Units
): Promise<CurrentWeather> {
  return await apiClient.getGeoData(city).then((response: Geocoding[]) => {
    return apiClient.getCurrentWeather(response[0].lat, response[0].lon, units);
  });
}

export async function getCitiesWeather(
  units: Units
): Promise<CurrentWeather[]> {
  const requests = cities.map(async (city) => {
    const response = await getCityWeather(
      `${city.cityName},${city.countryCode}`,
      units
    );
    return { city: city.cityName, ...response };
  });
  return await Promise.all(requests);
}
