import { ChangeEvent, useState } from 'react';
import { UNITS } from '../../../model/units';

const useUnits = (unitsInitial?: UNITS) => {
  const [units, setUnits] = useState<UNITS>(unitsInitial ?? UNITS.METRIC);

  const handleUnits = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: string;
    }>
  ) => {
    const { value } = event.target;

    const newUnit = UNITS[value.toUpperCase() as keyof typeof UNITS];
    setUnits(newUnit);
  };

  return { units, handleUnits };
};
export default useUnits;
