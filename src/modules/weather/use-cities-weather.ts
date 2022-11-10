import { useCallback, useContext, useEffect, useState } from "react";
import { CurrentWeather } from "../../model/weather";
import { getCitiesWeather } from "../../services/weatherService";
import { AppContext } from "../outerUnitsSwitch/AppContainer";

const useCitiesWeather = () => {
  const { units } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [citiesWeather, setCitiesWeather] = useState<CurrentWeather[]>([]);

  const handleLoadWeather =  () => {
      setLoading(true);
      getCitiesWeather(units)
      .then(setCitiesWeather)
      .catch(setError)
      .finally(()=> setLoading(false));
    };
  
    return { citiesWeather, handleLoadWeather, error, loading, units };
};

export default useCitiesWeather;
