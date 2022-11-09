import { ChangeEvent, createContext, useState } from "react";
import { Units, UnitsEnum } from "../../model/units";
import CitiesWeatherContainer from "../weather/CitiesWeatherContainer";

//TODO: move to units module
export const UnitsContext = createContext<Units>("metric");

export const General = () => {
  const [units, setUnits] = useState<Units>("metric");

  const handleUnits = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: any;
    }>
  ) => {
    const { value } = event.target;
    setUnits(value);
  };

  return (
    <div>
      <label className="">
        <input
          type="radio"
          name="units"
          checked={units === UnitsEnum.IMPERIAL}
          value={UnitsEnum.IMPERIAL}
          onChange={(e) => handleUnits(e)}
        />
        Fahrenheit
      </label>
      <label className="">
        <input
          type="radio"
          name="units"
          checked={units === UnitsEnum.METRIC}
          value={UnitsEnum.METRIC}
          onChange={(e) => handleUnits(e)}
        />
        Celcius
      </label>
      <UnitsContext.Provider value={units}>
        <CitiesWeatherContainer />
      </UnitsContext.Provider>
    </div>
  );
};
