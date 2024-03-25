import { Checkbox } from "@/components/ui/checkbox";
import { Data } from "@/types/Producer";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";

interface FilterByStudioProps {
  producers: Data[];
  router: AppRouterInstance;
  pathname: string;
  createQueryString: (name: string, value: string) => string;
  containQueryString: (name: string, value: string) => boolean;
}

const FilterByStudio = ({
  producers,
  router,
  pathname,
  createQueryString,
  containQueryString,
}: FilterByStudioProps) => {
  return (
    <div className="flex flex-col space-y-3">
      {producers.map((producer, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <Checkbox
            id={producer.mal_id.toString()}
            checked={containQueryString(
              "producers",
              producer.mal_id.toString()
            )}
            onClick={() =>
              router.push(
                pathname +
                  "?" +
                  createQueryString("producers", producer.mal_id.toString()),
                { scroll: false }
              )
            }
          />
          <label
            htmlFor={producer.mal_id.toString()}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {producer.titles.find((title) => title.type === "Default")?.title}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterByStudio;
