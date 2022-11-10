import fog from '../../fog.svg';
import reshot from '../../reshot.svg';
import "./header.css";
import useUnits from "../outerUnitsSwitch/use-units";
import { UNITS } from "../../model/units";
import { FC, useContext } from "react";
import { AppContext } from "../outerUnitsSwitch/AppContainer";
import Button from "../shared/button/Button";
import useCitiesWeather from "../weather/use-cities-weather";

const Header: FC = () => {
  {
    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
  }
  const { units, handleUnits } = useContext(AppContext);
  const {handleLoadWeather} = useCitiesWeather();
  const handleReload = () => {
    handleLoadWeather();
  }
  return (
    <header className="App-header">
      {/* <Logo /> */}
      <img src={fog} className="logo" alt="logo" />
      <div className="internal-container">
        <h2 className='app-name'>{"Global Current Weather"}</h2>
        {/* <img
          alt="menu"
          className="menu-icon"
          src={`icons/menu.svg`}
          onClick={() => toggleScreen()}
        /> */}
        {/* 
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label> */}
        <div className=''>
        <label className="units">
          <input
            type="radio"
            name="units"
            checked={units === UNITS.IMPERIAL}
            value={UNITS.IMPERIAL}
            onChange={(e) => handleUnits(e)}
          />
          Fahrenheit °F
        </label>
        <label className="units">
          <input
            type="radio"
            name="units"
            checked={units === UNITS.METRIC}
            value={UNITS.METRIC}
            onChange={(e) => handleUnits(e)}
          />
          Celcius °C
        </label> 
        </div>
        <div>
        <Button name="Update current weather" onClick={handleReload}/>   
        </div>   
      </div>
    </header>
  );
};

export default Header;
