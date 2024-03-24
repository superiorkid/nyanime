"use client";

import FilterByAiringStatus from "@/components/filter-by-airing-status";
import FilterByGenres from "@/components/filter-by-genres";
import FilterBySeason from "@/components/filter-by-season";
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
          if (params.has(name, value)) {
            params.delete(name, value);
          } else {
            params.append(name, value);
          }
          break;
        default:
          if (!value || params.has(name, value)) {
            params.delete(name);
          } else {
            params.set(name, value);
          }
      }

      return params.toString();
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

        <AccordionItem value="season">
          <AccordionTrigger>Season</AccordionTrigger>
          <AccordionContent>
            <FilterBySeason />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="genres">
          <AccordionTrigger>Genres</AccordionTrigger>
          <AccordionContent>
            <FilterByGenres
              createQueryString={createQueryString}
              genres={genres}
              pathname={pathname}
              router={router}
              searchParams={searchParams}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="studio">
          <AccordionTrigger>Studio</AccordionTrigger>
          <AccordionContent>
            <FilterByStudio
              producers={producers}
              createQueryString={createQueryString}
              pathname={pathname}
              router={router}
              searchParams={searchParams}
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
              searchParams={searchParams}
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
              searchParams={searchParams}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default SidebarFilter;
