import { Checkbox } from "@/components/ui/checkbox";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

const AIRING_STATUS = ["airing", "complete", "upcoming"];

interface FilterByAiringStatusProps {
  searchParams: ReadonlyURLSearchParams;
  router: AppRouterInstance;
  pathname: string;
  createQueryString: (name: string, value: string) => string;
}

const FilterByAiringStatus = ({
  searchParams,
  router,
  pathname,
  createQueryString,
}: FilterByAiringStatusProps) => {
  return (
    <div className="flex flex-col space-y-3">
      {AIRING_STATUS.map((status, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <Checkbox
            id={status}
            checked={searchParams.has("status", status)}
            onClick={() =>
              router.push(pathname + "?" + createQueryString("status", status))
            }
          />
          <label
            htmlFor={status}
            className="text-sm capitalize font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {status}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterByAiringStatus;
