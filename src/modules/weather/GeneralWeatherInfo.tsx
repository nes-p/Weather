import { FC, useContext } from "react";
import { UnitsEnum } from "../../model/units";
import { UnitsContext } from "../outerUnitsSwitch/UnitsContainer";
import { convertUnixTimeToDate } from "../shared/utils/timeUtil";
import { CurrentWeatherProps } from "./CurrentWeatherComponent";
import WeatherRow from "./WeaterRow";

const GeneralWeatherInfo: FC<CurrentWeatherProps> = ({ data }) => {
  const { units } = useContext(UnitsContext);
  const temperatureUnits = units === UnitsEnum.METRIC ? "°C" : "°F";
  return (
    <>
      <strong className="temperature">
        {Math.round(data.main.temp)}
        {temperatureUnits}
      </strong>
      <div className="details">
        <WeatherRow label="Details" />
        <WeatherRow
          label="Feels like"
          value={`${Math.round(data.main.feels_like)}°C`}
        />
        <WeatherRow
          label="Min temp"
          value={`${Math.round(data.main.temp_min)}°C`}
        />
        <WeatherRow
          label="Max temp"
          value={`${Math.round(data.main.temp_max)}°C`}
        />
        {/* <WeatherRow
          label="Sunrise "
          value={convertUnixTimeToDate(data.sys.sunrise).toLocaleTimeString()}
        /> */}
      </div>
    </>
  );
};
export default GeneralWeatherInfo;
