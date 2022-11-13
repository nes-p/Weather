import { FC, useContext } from 'react';
import fog from '../../fog.svg';
import { UNITS } from '../../model/units';
import { UnitsContext } from '../unitsContainer/UnitsContainer';
import Button from '../shared/components/button/Button';
import useCitiesWeather from '../weather/hooks/use-cities-weather';
import { CELCIUS_UNIT, FAHRENHEIT_UNIT, HEADER_TITLE } from './constants/weather';
import './header.css';
import './radio.css';

const Header: FC = () => {
  const { units, handleUnits } = useContext(UnitsContext);
  const { handleLoadWeather } = useCitiesWeather();
  const handleReload = () => {
    handleLoadWeather();
  };
  return (
    <header className="App-header">
      <img src={fog} className="logo" alt="logo" />
      <div className="internal-container">
        <h2 className="app-name">{HEADER_TITLE}</h2>
        <div className="">
          <label htmlFor="imperial-unit" className="units">
            <input
              type="radio"
              name="units"
              checked={units === UNITS.IMPERIAL}
              value={UNITS.IMPERIAL}
              onChange={(e) => handleUnits(e)}
              className="radio-button"
              id="imperial-unit"
            />
            <span className="radio-span">{FAHRENHEIT_UNIT}</span>
          </label>
          <label htmlFor="metric-unit" className="units">
            <input
              type="radio"
              name="units"
              checked={units === UNITS.METRIC}
              value={UNITS.METRIC}
              onChange={(e) => handleUnits(e)}
              id="metric-unit"
            />
            <span className="radio-span">{CELCIUS_UNIT}</span>
          </label>
        </div>
        <div>
          <Button name="Update current weather" onClick={handleReload} />
        </div>
      </div>
    </header>
  );
};

export default Header;
