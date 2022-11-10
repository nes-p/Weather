import logo from "./logo.svg";
import "./header.css";
import useUnits from "../outerUnitsSwitch/use-units";
import { Units, UnitsEnum } from "../../model/units";
import { ChangeEvent, FC, useContext } from "react";
import { UnitsContext } from "../outerUnitsSwitch/UnitsContainer";

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
  const { units, handleUnits } = useContext(UnitsContext);

  return (
    <header className="App-header">
      {/* <Logo /> */}
      <div className="internal-container">
        <h1>{"Global Current Weather"}</h1>
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

        <label className="">
          <input
            type="radio"
            name="units"
            checked={units === UnitsEnum.IMPERIAL}
            value={UnitsEnum.IMPERIAL}
            onChange={(e) => handleUnits(e)}
          />
          Fahrenheit °F
        </label>
        <label className="">
          <input
            type="radio"
            name="units"
            checked={units === UnitsEnum.METRIC}
            value={UnitsEnum.METRIC}
            onChange={(e) => handleUnits(e)}
          />
          Celcius °C
        </label>
      </div>
    </header>
  );
};

export default Header;
