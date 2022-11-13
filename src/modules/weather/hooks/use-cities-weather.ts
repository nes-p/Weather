import { useContext, useState } from 'react';
import { CurrentWeather } from '../../../model/weather';
import { getCitiesWeather } from '../../../services/weatherService';
import { UnitsContext } from '../../unitsContainer/UnitsContainer';

const useCitiesWeather = () => {
  const { units } = useContext(UnitsContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [citiesWeather, setCitiesWeather] = useState<CurrentWeather[]>([]);

  const handleLoadWeather = () => {
    setLoading(true);
    getCitiesWeather(units)
      .then(setCitiesWeather)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { citiesWeather, handleLoadWeather, error, loading, units };
};

export default useCitiesWeather;
