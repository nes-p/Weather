import { FC } from 'react';

interface WeatherRowProps {
  label: string;
  value?: string;
  dataTestId?: string;
}
const WeatherRow: FC<WeatherRowProps> = ({ label, value, dataTestId }) => {
  return (
    <div className="parameter-row" data-testid={dataTestId}>
      <span className="parameter-label">{label}</span>
      {value && <span className="parameter-value">{value}</span>}
    </div>
  );
};

export default WeatherRow;
