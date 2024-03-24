import { Data } from "@/types/Producer";
import React from "react";
import { Checkbox } from "./ui/checkbox";
import { ReadonlyURLSearchParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface FilterByStudioProps {
  producers: Data[];
  searchParams: ReadonlyURLSearchParams;
  router: AppRouterInstance;
  pathname: string;
  createQueryString: (name: string, value: string) => string;
}

const FilterByStudio = ({
  producers,
  router,
  searchParams,
  pathname,
  createQueryString,
}: FilterByStudioProps) => {
  return (
    <div className="flex flex-col space-y-3">
      {producers.map((producer, index) => (
        <div className="flex items-center space-x-2" key={index}>
          <Checkbox
            id={producer.mal_id.toString()}
            checked={searchParams.has("producers", producer.mal_id.toString())}
            onClick={() =>
              router.push(
                pathname +
                  "?" +
                  createQueryString("producers", producer.mal_id.toString())
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
