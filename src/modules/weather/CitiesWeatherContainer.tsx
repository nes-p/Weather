import { FC } from "react";
import { useCitiesWeather } from "./use-cities-weather";

export const CitiesWeatherContainer: FC = () => {
  const { citiesWeather, error, loading } = useCitiesWeather();
  return <></>;
};
