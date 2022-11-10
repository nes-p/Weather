import { ChangeEvent, createContext, useState } from "react";
import { Units } from "../../model/units";
import Header from "../header/Header";
import CitiesWeatherContainer from "../weather/CitiesWeatherContainer";
import useUnits from "./use-units";

interface AppContextProps {
  units: Units;
  handleUnits: (
    event: ChangeEvent<{
      name?: string | undefined;
      value: string;
    }>
  ) => void;
}

//TODO: move to units module
export const AppContext = createContext<AppContextProps>({
  units: "metric",
  //TODO: check this mock
  handleUnits: () => {},
});

const AppContainer = () => {  
  const { units, handleUnits } = useUnits();
  return (
    <div>
      <AppContext.Provider
        value={{
          units,
          handleUnits,         
        }}
      >
        <Header />
        <main>
           <CitiesWeatherContainer />
        </main>
      </AppContext.Provider>
      <footer>Page created by nes-p</footer>
    </div>
  );
};

export default AppContainer;
