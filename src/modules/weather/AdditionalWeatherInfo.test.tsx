import { render, screen } from '@testing-library/react';
import AdditionalWeatherInfo, { IAdditionalWeatherInfo } from './AdditionalWeatherInfo';

const partionalWeather: IAdditionalWeatherInfo = {
  data: {
    wind: {
      speed: 0.62,
      deg: 349,
      gust: 1.18,
    },
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
    clouds: {
      all: 100,
    },
    visibility: 10000,
    rain: {
      '1h': 3.16,
    },
  },
};

describe('AdditionalWeatherInfo', () => {
  it('should render component', () => {
    render(<AdditionalWeatherInfo data={partionalWeather.data} />);
    expect(screen.getByText(/Wind/i)).toBeInTheDocument();
    expect(screen.getByText(/Humidity/i)).toBeInTheDocument();
    expect(screen.getByText(/Pressure/i)).toBeInTheDocument();
    expect(screen.getByText(/Visibility/i)).toBeInTheDocument();
    expect(screen.getByText(/Clouds/i)).toBeInTheDocument();
    expect(screen.getByText(/Rain/i)).toBeInTheDocument();
    expect(screen.queryByText(/Snow/i)).not.toBeInTheDocument();
  });
});
