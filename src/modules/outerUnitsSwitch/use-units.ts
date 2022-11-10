import { ChangeEvent, useState } from "react";
import { Units } from "../../model/units";

const useUnits = (unitsInitial?: Units) => {
  const [units, setUnits] = useState<Units>(unitsInitial ?? "metric");

  const handleUnits = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: string;
    }>
  ) => {
    const { value } = event.target;
    //TODO: check this
    setUnits(value as Units);
  };

  return { units, handleUnits };
};
export default useUnits;
