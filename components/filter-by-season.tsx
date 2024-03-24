import React from "react";
import { Checkbox } from "./ui/checkbox";

const FilterBySeason = () => {
  const seasons = [
    {
      id: "winter",
      label: "Winter",
    },
    {
      id: "spring",
      label: "Spring",
    },
    {
      id: "summer",
      label: "Summer",
    },
    {
      id: "fall",
      label: "Fall",
    },
  ];

  return (
    <div className="flex flex-col space-y-3">
      {seasons.map((season, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <Checkbox id={season.id} />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {season.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterBySeason;
