import { FC } from "react";
import { CurrentWeather } from "../../model/weather";
import { CurrentWeatherProps } from "./CurrentWeatherComponent";
import WeatherRow from "./WeaterRow";


const GeneralWeatherInfo: FC<CurrentWeatherProps> = ({ data }) => {
    return (
        <>
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
        <WeatherRow label={"Details"}  />
        <WeatherRow label={"Feels like"} value={`${Math.round(data.main.feels_like)}°C`} />           
        <WeatherRow label={"Wind"} value={`${data.wind.speed} m/s`} />         
        <WeatherRow label={"Humidity"} value={`${data.main.humidity}%`} />          
        <WeatherRow label={"Pressure"} value={`${data.main.pressure} hPa`} />         
        </div>
        </>
    )
}
export default GeneralWeatherInfo;