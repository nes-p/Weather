import { render, screen } from '@testing-library/react';
import GeneralWeatherInfo, { IGeneralWeatherInfo } from './GeneralWeatherInfo';

const partionalWeather: IGeneralWeatherInfo = {
  data: {
    main: {
      temp: 298.48,
      feels_like: 298.74,
      temp_min: 297.56,
      temp_max: 300.05,
      pressure: 1015,
      humidity: 64,
      sea_level: 1015,
      grnd_level: 933,
    },
  },
};

describe('GeneralWeatherInfo', () => {
  it('should render component', () => {
    render(<GeneralWeatherInfo data={partionalWeather.data} />);
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Feels like/i)).toBeInTheDocument();
    expect(screen.getByText(/Min temp/i)).toBeInTheDocument();
    expect(screen.getByText(/Max temp/i)).toBeInTheDocument();
  });
});
