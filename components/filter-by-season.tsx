import { Checkbox } from "@/components/ui/checkbox";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

const SEASONS = [
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

interface FilterBySeasonProps {
  pathname: string;
  router: AppRouterInstance;
  createQueryString: (name: string, value: string) => string;
  containQueryString: (name: string, value: string) => boolean;
}

const FilterBySeason = ({
  pathname,
  router,
  createQueryString,
  containQueryString,
}: FilterBySeasonProps) => {
  return (
    <div className="flex flex-col space-y-3">
      {SEASONS.map((season, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <Checkbox
            id={season.id}
            checked={containQueryString("season", season.id)}
            onClick={() =>
              router.push(
                pathname + "?" + createQueryString("season", season.id),
                { scroll: false }
              )
            }
          />
          <label
            htmlFor={season.id}
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
