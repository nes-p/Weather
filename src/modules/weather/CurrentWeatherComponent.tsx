import React, { FC, useState } from "react";
import "./current-weather.css";
import "./slider.css";
import { CurrentWeather } from "../../model/weather";
import GeneralWeatherInfo from "./GeneralWeatherInfo";
import AdditionalWeatherInfo from "./AdditionalWeatherInfo";
import classNames from "classnames";

export interface CurrentWeatherProps {
  data: CurrentWeather;
}

const CurrentWeatherComponent: FC<CurrentWeatherProps> = ({ data }) => {
  const [isInitialScreen, setScreen] = useState(true);

  const toggleScreen = () => {
    setScreen(!isInitialScreen);
  };

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
            onClick={() => toggleScreen()}
          />
        </div>
        <div className="bottom">
          {isInitialScreen ? (
            <GeneralWeatherInfo data={data} />
          ) : (
            <AdditionalWeatherInfo data={data} />
          )}
        </div>
        <div>
          <img
            alt="chevron-right"
            className="chevron-right"
            src={`icons/chevron-right.svg`}
            onClick={() => toggleScreen()}
          />
        </div>
      </div>
      <div className="dots-container">
        <span
          onClick={() => toggleScreen()}
          className={classNames(
            "dot",
            isInitialScreen ? "dot-bright" : "dot-faded"
          )}
        ></span>
        <span
          onClick={() => toggleScreen()}
          className={classNames(
            "dot",
            isInitialScreen ? "dot-faded" : "dot-bright"
          )}
        ></span>
      </div>
    </div>
  );
};

export default CurrentWeatherComponent;
