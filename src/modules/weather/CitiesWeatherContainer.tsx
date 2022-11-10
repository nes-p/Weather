import { FC, useEffect } from "react";
import Loader from "../shared/loader/Loader";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import useCitiesWeather from "./use-cities-weather";

const CitiesWeatherContainer: FC = () => {
  const { citiesWeather, error, loading, handleLoadWeather, units } = useCitiesWeather();
  useEffect(()=> {
    handleLoadWeather();    
  },  [units]);
  const isWeather = citiesWeather.length > 0 && !error && !loading;  

  return (

    <div className="outer-weather">
      <div className="side-col"></div>
      <div className="weather-container">
        {loading && <Loader/>}
        {isWeather &&
          citiesWeather.map((cityWeather) => (
            <CurrentWeatherComponent 
            key={cityWeather.id} 
            data={cityWeather} />
          ))}          
      </div>
      <div className="side-col"></div>
    </div>
  );
};
export default CitiesWeatherContainer;
