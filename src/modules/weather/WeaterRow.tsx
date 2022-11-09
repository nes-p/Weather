import { FC } from "react";

interface WeatherRowProps {
    label: string;
    value?: string;
}
const WeatherRow:FC<WeatherRowProps> = ({label, value}) => {
return (
    <div className="parameter-row">
            <span className="parameter-label">{label}</span>
            {value && <span className="parameter-value">{value}</span>}
          </div>
)
}

export default WeatherRow;