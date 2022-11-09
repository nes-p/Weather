import { FC } from "react";
import { CurrentWeatherProps } from "./CurrentWeatherComponent";
import WeatherRow from "./WeaterRow";

const AdditionalWeatherInfo:FC<CurrentWeatherProps> = ({ data }) => {
    return <>'
    <WeatherRow label={"Visibility"} value={`${data.visibility} m`}  /> 
    <WeatherRow label={"Clouds"} value={`${data.clouds.all}%`}  />
    <WeatherRow label={"Rain"} value={`${data?.rain?.["1h"]} mm`}   />
    <WeatherRow label={"Snow"} value={`${data?.snow?.["1h"]} mm`}   />
    </>
}
export default AdditionalWeatherInfo;