"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";

const LibrarySort = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [value, setValue] = useState<string>();

  const sorts = useMemo<{ id: string; label: string }[]>(
    () => [
      { id: "name-asc", label: "Name: Asc" },
      { id: "name-desc", label: "Name: Desc" },
      { id: "year-asc", label: "Year: Asc" },
      { id: "year-desc", label: "Year: Desc" },
    ],
    []
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === "all") {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  useLayoutEffect(() => {
    setValue((_) => searchParams.get("sort") ?? "");
  }, [searchParams]);

  const onValueChange = useCallback(
    (value: string) => {
      setValue((_) => value);
      router.push(pathname + "?" + createQueryString("sort", value));
    },
    [createQueryString, pathname, router]
  );

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Filters" />
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="all">All</SelectItem>
        {sorts.map((sort, index) => (
          <SelectItem value={sort.id} key={index}>
            {sort.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LibrarySort;
