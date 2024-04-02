"use client";

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/types/AnimeSearch";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationButtonProps {
  paginationOptions: Pagination;
}

function PaginationButton({ paginationOptions }: PaginationButtonProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Button
      disabled={!paginationOptions.has_next_page}
      size="lg"
      className="w-full bg-background text-foreground hover:bg-muted-foreground hover:text-background"
      onClick={() =>
        router.push(
          pathname +
            "?" +
            createQueryString(
              "page",
              (paginationOptions.current_page + 1).toString()
            ),
          { scroll: true }
        )
      }
    >
      Show More
    </Button>
  );
}

export default PaginationButton;
