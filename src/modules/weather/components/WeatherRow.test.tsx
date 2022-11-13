import { render, screen } from '@testing-library/react';
import WeatherRow from './WeaterRow';

describe('WeatherRow', () => {
  it('should render component', () => {
    const LABEL = 'Label';
    const VALUE = 'Value';
    render(<WeatherRow label={LABEL} value={VALUE} />);
    expect(screen.getByText(/Label/i)).toBeInTheDocument();
    expect(screen.getByText(/Value/i)).toBeInTheDocument();
  });
});
