import React from "react";
import { Button } from "@/components/ui/button";
import { Settings2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Data as GenreData } from "@/types/Genre";
import { Data as ProducerData } from "@/types/Producer";
import SidebarFilter from "@/components/sidebar-filter";

interface MobileSidebarFilterProps {
  genres: GenreData[];
  producers: ProducerData[];
}

function MobileSidebarFilter({ genres, producers }: MobileSidebarFilterProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="sm">
          Filters
          <Settings2 className="w-4 h-4 ml-2" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="text-foreground">
        <SheetHeader>
          <SheetTitle>Filter Anime</SheetTitle>
        </SheetHeader>
        <SidebarFilter genres={genres} producers={producers} variant="MOBILE" />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebarFilter;
