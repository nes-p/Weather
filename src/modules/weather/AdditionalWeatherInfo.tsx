import { FC } from "react";
import { convertUnixTimeToDate } from "../shared/utils/timeUtil";
import { CurrentWeatherProps } from "./CurrentWeatherComponent";
import WeatherRow from "./WeaterRow";

const AdditionalWeatherInfo: FC<CurrentWeatherProps> = ({ data }) => {
  return (
    <div className="details">
      <WeatherRow label="Wind" value={`${data.wind.speed} m/s`} />
      <WeatherRow label="Humidity" value={`${data.main.humidity}%`} />
      <WeatherRow label="Pressure" value={`${data.main.pressure} hPa`} />
      <WeatherRow label="Visibility" value={`${data.visibility} m`} />
      <WeatherRow label="Clouds" value={`${data.clouds.all}%`} />
      {data.rain && (
        <WeatherRow label="Rain" value={`${data.rain?.["1h"]} mm`} />
      )}
      {data.snow && (
        <WeatherRow label="Snow" value={`${data.snow?.["1h"]} mm`} />
      )}
      {/* <WeatherRow
        label="Time of data calculation"
        value={convertUnixTimeToDate(data.dt).toLocaleTimeString()}
      /> */}
    </div>
  );
};

export default AdditionalWeatherInfo;
