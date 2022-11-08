import { createContext, useState } from "react";
import { Units } from "../../model/units";
import CitiesWeatherContainer from "../weather/CitiesWeatherContainer";

//TODO: move to units module
export const UnitsContext = createContext<Units>("standard");

export const General = () => {
  const [units, setUnits] = useState<Units>("standard");

  return (
    <UnitsContext.Provider value={units}>
      <CitiesWeatherContainer />
    </UnitsContext.Provider>
  );
};
