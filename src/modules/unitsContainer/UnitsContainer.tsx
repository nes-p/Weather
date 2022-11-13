import { ChangeEvent, createContext } from 'react';
import { UNITS } from '../../model/units';
import Header from '../header/Header';

import CitiesWeatherContainer from '../weather/containers/CitiesWeatherContainer';
import useUnits from './hooks/use-units';

interface UnitsContextProps {
  units: UNITS;
  handleUnits: (
    event: ChangeEvent<{
      name?: string | undefined;
      value: string;
    }>
  ) => void;
}

export const UnitsContext = createContext<UnitsContextProps>({
  units: UNITS.METRIC,
  handleUnits: () => null,
});

const UnitsContainer = () => {
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
