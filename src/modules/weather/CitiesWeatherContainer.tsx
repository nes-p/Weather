import { createContext, FC, useContext } from "react";
import { CurrentWeather } from "../../model/weather";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import { useCitiesWeather } from "./use-cities-weather";


const CitiesWeatherContainer: FC = () => {
  const { citiesWeather, error, loading } = useCitiesWeather();
  const isWeather = citiesWeather && !error && !loading;

  return (
    <div className="outer-weather">
    <div className="side-col"></div>  
    <div className="weather-container">
      {isWeather &&
        citiesWeather.map((cityWeather) => (      
          <CurrentWeatherComponent key={cityWeather.id} data={cityWeather} />        
        ))}
    </div>
    <div className="side-col"></div> 
    </div>
  );
};
export default CitiesWeatherContainer;
