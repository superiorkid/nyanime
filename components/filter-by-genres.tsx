"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Data as GenreData } from "@/types/Genre";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReadonlyURLSearchParams } from "next/navigation";
import { useReducer } from "react";

interface FilterByGenresProps {
  pathname: string;
  router: AppRouterInstance;
  genres: GenreData[];
  searchParams: ReadonlyURLSearchParams;
  createQueryString: (name: string, value: string) => string;
}

const FilterByGenres = ({
  pathname,
  router,
  genres,
  searchParams,
  createQueryString,
}: FilterByGenresProps) => {
  const [collapse, collapseToggle] = useReducer((state) => !state, false);

  return (
    <>
      <div className="flex flex-col space-y-3">
        {genres.slice(0, !collapse ? 10 : genres.length).map((genre, index) => (
          <div className="flex items-center space-x-2" key={index}>
            <Checkbox
              id={genre.mal_id.toString()}
              checked={searchParams.has("genres", genre.mal_id.toString())}
              onClick={() =>
                router.push(
                  pathname +
                    "?" +
                    createQueryString("genres", genre.mal_id.toString())
                )
              }
            />
            <label
              htmlFor={genre.mal_id.toString()}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {genre.name}
            </label>
          </div>
        ))}
      </div>
      <Button
        className="mt-3 text-emerald-500"
        size="sm"
        variant="link"
        onClick={collapseToggle}
      >
        {collapse ? (
          <>
            Show Less
            <ChevronUp className="w-4 h-4 ml-2" />
          </>
        ) : (
          <>
            Show More
            <ChevronDown className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </>
  );
};

export default FilterByGenres;
