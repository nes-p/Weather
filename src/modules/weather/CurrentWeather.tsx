import React, { FC } from "react";
import "./current-weather.css";
import { CurrentWeather } from "../../model/weather";
import classNames from "classnames";

interface CurrentWeatherProps {
  data: CurrentWeather;
}

const CurrentWeatherComponent: FC<CurrentWeatherProps> = ({ data }) => {

  
  console.log("data", data);
  return (
    <div className="weather">    
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.svg`}
        />
      </div>    
      <div className="slider-container">     
        <div>
              <img
            alt="chevron-left"
            className="chevron-left"
            src={`icons/chevron-right.svg`}
          />
          </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
        </div>    
      <div><img
          alt="chevron-right"
          className="chevron-right"
          src={`icons/chevron-right.svg`}
        /></div> 
      </div>
      <div className="dots-container">
      <span className="dot"></span>
     
      <span className="dot-faded"></span>
      </div> 
    </div>
   


       
   
  );
};

export default CurrentWeatherComponent;
