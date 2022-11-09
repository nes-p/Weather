import { FC } from "react";
import CurrentWeatherComponent from "./CurrentWeather";
import { useCitiesWeather } from "./use-cities-weather";

const CitiesWeatherContainer: FC = () => {
  const { citiesWeather, error, loading } = useCitiesWeather();
  const isWeather = citiesWeather && !error && !loading;

  return (
    <div className="weather-container">
      {isWeather &&
        citiesWeather.map((cityWeather) => (
          <CurrentWeatherComponent key={cityWeather.id} data={cityWeather} />
        ))}
    </div>
  );
};
export default CitiesWeatherContainer;
