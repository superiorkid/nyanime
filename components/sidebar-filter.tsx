"use client";

import FilterByAiringStatus from "@/components/filter-by-airing-status";
import FilterByGenres from "@/components/filter-by-genres";
import FilterByStudio from "@/components/filter-by-studio";
import FilterByType from "@/components/filter-by-type";
import FilterByYear from "@/components/filter-by-year";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Data as GenreData } from "@/types/Genre";
import { Data as ProducerData } from "@/types/Producer";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface SidebarFilterProps {
  genres: GenreData[];
  producers: ProducerData[];
}

const SidebarFilter = ({ genres, producers }: SidebarFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      switch (name) {
        case "genres":
        case "producers":
          const getParams = params.getAll(name);

          if (getParams.includes(value)) {
            let values = getParams.filter((val) => val !== value);
            params.delete(name);
            values.forEach((value) => params.append(name, value));
          } else {
            params.append(name, value);
          }

          if (params.has("page")) {
            params.delete("page");
          }

          break;
        default:
          if (params.has("page")) {
            params.delete("page");
          }

          if (!value || params.get(name) === value) {
            params.delete(name);
          } else {
            params.set(name, value);
          }
      }

      return params.toString();
    },
    [searchParams]
  );

  const containQueryString = useCallback(
    (name: string, value: string) => {
      const params = searchParams.getAll(name);
      return params.includes(value);
    },
    [searchParams]
  );

  return (
    <aside className="w-56">
      <Accordion type="multiple">
        <AccordionItem value="year">
          <AccordionTrigger>Year</AccordionTrigger>
          <AccordionContent>
            <FilterByYear
              createQueryString={createQueryString}
              pathname={pathname}
              router={router}
              searchParams={searchParams}
            />
          </AccordionContent>
        </AccordionItem>

        {/* <AccordionItem value="season">
          <AccordionTrigger>Season</AccordionTrigger>
          <AccordionContent>
            <FilterBySeason
              createQueryString={createQueryString}
              pathname={pathname}
              router={router}
              containQueryString={containQueryString}
            />
          </AccordionContent>
        </AccordionItem> */}

        <AccordionItem value="genres">
          <AccordionTrigger>
            <p>
              Genres{" "}
              <span className="font-medium text-sm text-zinc-400">
                (multiple)
              </span>
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <FilterByGenres
              createQueryString={createQueryString}
              genres={genres}
              pathname={pathname}
              router={router}
              searchParams={searchParams}
              containQueryString={containQueryString}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="studio">
          <AccordionTrigger>
            {" "}
            <p>
              Studio{" "}
              <span className="font-medium text-sm text-zinc-400">
                (multiple)
              </span>
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <FilterByStudio
              producers={producers}
              createQueryString={createQueryString}
              pathname={pathname}
              router={router}
              containQueryString={containQueryString}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="format">
          <AccordionTrigger>Format</AccordionTrigger>
          <AccordionContent>
            <FilterByType
              createQueryString={createQueryString}
              pathname={pathname}
              router={router}
              containQueryString={containQueryString}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="airing-status">
          <AccordionTrigger>Airing Status</AccordionTrigger>
          <AccordionContent>
            <FilterByAiringStatus
              createQueryString={createQueryString}
              pathname={pathname}
              router={router}
              containQueryString={containQueryString}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default SidebarFilter;
