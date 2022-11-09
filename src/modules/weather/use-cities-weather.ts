import { useContext, useEffect, useState } from "react";
import { CurrentWeather } from "../../model/weather";
import { getCitiesWeather } from "../../services/weatherService";
import { UnitsContext } from "../outerUnitsSwitch";

export const useCitiesWeather = () => {
  const units = useContext(UnitsContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [citiesWeather, setCitiesWeather] = useState<CurrentWeather[]>();

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      getCitiesWeather(units)
        .then(setCitiesWeather)
        .catch(setError)
        .finally(() => setLoading(false));
    }
  }, [units]);

  return { citiesWeather, loading, error };
};
