"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSort } from "@/hooks/useSort";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useLayoutEffect, useState } from "react";

const AnimeSort = () => {
  const sorts = useSort();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState<string>();

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

  const onValueChange = useCallback(
    (value: string) => {
      setValue((_) => value);
      router.push(pathname + "?" + createQueryString("sort", value));
    },
    [createQueryString, pathname, router]
  );

  useLayoutEffect(() => {
    setValue((_) => searchParams.get("sort") ?? "");
  }, [searchParams]);

  return (
    <Select value={value} onValueChange={(value) => onValueChange(value)}>
      <SelectTrigger className="max-w-fit">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {sorts.map(({ id, label }, index) => (
          <SelectItem key={index} value={id}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default AnimeSort;
