import { FC } from 'react';
import { CurrentWeather } from '../../model/weather';
import WeatherRow from './components/WeaterRow';

export interface IAdditionalWeatherInfo {
  data: Pick<CurrentWeather, 'wind' | 'main' | 'visibility' | 'clouds' | 'rain' | 'snow'>;
}

const AdditionalWeatherInfo: FC<IAdditionalWeatherInfo> = ({ data }) => {
  return (
    <div className="details">
      <WeatherRow label="Wind" value={`${data.wind.speed} m/s`} data-testid="wind-line" />
      <WeatherRow label="Humidity" value={`${data.main.humidity}%`} />
      <WeatherRow label="Pressure" value={`${data.main.pressure} hPa`} />
      <WeatherRow label="Visibility" value={`${data.visibility} m`} />
      <WeatherRow label="Clouds" value={`${data.clouds.all}%`} />
      {data.rain && <WeatherRow label="Rain" value={`${data.rain?.['1h']} mm`} />}
      {data.snow && <WeatherRow label="Snow" value={`${data.snow?.['1h']} mm`} />}
    </div>
  );
};

export default AdditionalWeatherInfo;
