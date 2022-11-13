import { FC, useContext } from 'react';
import { UNITS } from '../../model/units';
import { CurrentWeather } from '../../model/weather';
import { UnitsContext } from '../unitsContainer/UnitsContainer';

import WeatherRow from './components/WeaterRow';

export interface IGeneralWeatherInfo {
  data: Pick<CurrentWeather, 'main'>;
}

const GeneralWeatherInfo: FC<IGeneralWeatherInfo> = ({ data }) => {
  const { units } = useContext(UnitsContext);
  const temperatureUnits = units === UNITS.METRIC ? '°C' : '°F';
  return (
    <>
      <strong className="temperature">
        {Math.round(data.main.temp)}
        {temperatureUnits}
      </strong>
      <div className="details">
        <WeatherRow label="Details" />
        <WeatherRow label="Feels like" value={`${Math.round(data.main.feels_like)}°C`} />
        <WeatherRow label="Min temp" value={`${Math.round(data.main.temp_min)}°C`} />
        <WeatherRow label="Max temp" value={`${Math.round(data.main.temp_max)}°C`} />
      </div>
    </>
  );
};
export default GeneralWeatherInfo;
