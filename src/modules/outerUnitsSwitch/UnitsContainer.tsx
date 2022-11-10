import { ChangeEvent, createContext } from "react";
import { Units } from "../../model/units";
import Header from "../header/Header";
import CitiesWeatherContainer from "../weather/CitiesWeatherContainer";
import useUnits from "./use-units";

interface UnitsContextProps {
  units: Units;
  handleUnits: (
    event: ChangeEvent<{
      name?: string | undefined;
      value: string;
    }>
  ) => void;
}

//TODO: move to units module
export const UnitsContext = createContext<UnitsContextProps>({
  units: "metric",
  //TODO: check this mock
  handleUnits: () => {},
});

const UnitsContainer = () => {
  // const [units, setUnits] = useState<Units>("metric");

  // const handleUnits = (
  //   event: ChangeEvent<{
  //     name?: string | undefined;
  //     value: string;
  //   }>
  // ) => {
  //   const { value } = event.target;
  //   //TODO: check this
  //   setUnits(value as Units);
  // };

  const { units, handleUnits } = useUnits();

  return (
    <div>
      <UnitsContext.Provider
        value={{
          units,
          handleUnits,
        }}
      >
        <Header />
        <main>
          <CitiesWeatherContainer />
        </main>
      </UnitsContext.Provider>
      <footer>Page created by nes-p</footer>
    </div>
  );
};

export default UnitsContainer;
