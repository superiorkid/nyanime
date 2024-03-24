import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Checkbox } from "./ui/checkbox";

const TYPES = [
  "tv",
  "movie",
  "ova",
  "special",
  "ona",
  "music",
  "cm",
  "pv",
  "tv_special",
];

interface FilterByTypeProps {
  router: AppRouterInstance;
  pathname: string;
  searchParams: ReadonlyURLSearchParams;
  createQueryString: (name: string, value: string) => string;
}

const FilterByType = ({
  router,
  pathname,
  searchParams,
  createQueryString,
}: FilterByTypeProps) => {
  return (
    <div className="flex flex-col space-y-3">
      {TYPES.map((type, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <Checkbox
            id={type}
            checked={searchParams.has("type", type)}
            onClick={() =>
              router.push(pathname + "?" + createQueryString("type", type))
            }
          />
          <label
            htmlFor={type}
            className="text-sm capitalize font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {type}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterByType;
