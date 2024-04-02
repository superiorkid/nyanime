import {
  ArrowDown,
  ArrowDown01,
  ArrowUp,
  ArrowUp10,
  LucideIcon,
} from "lucide-react";
import { useMemo } from "react";

export function useSort() {
  const menus = useMemo<{ id: string; label: string; icon?: LucideIcon }[]>(
    () => [
      {
        id: "title-desc",
        label: "Title: Z to A",
        icon: ArrowDown,
      },
      { id: "title-asc", label: "Title: A to Z", icon: ArrowUp },
      {
        id: "popularity-desc",
        label: "Popularity: High to Low",
        icon: ArrowUp10,
      },
      {
        id: "popularity-asc",
        label: "Popularity: Low to High",
        icon: ArrowUp10,
      },
      {
        id: "episodes-desc",
        label: "Episodes: High to Low",
        icon: ArrowDown01,
      },
      { id: "episodes-asc", label: "Episodes: Low to High", icon: ArrowUp10 },
      { id: "score-desc", label: "Score: High to Low", icon: ArrowUp10 },
      { id: "score-asc", label: "Score Low to High", icon: ArrowUp10 },
    ],
    []
  );

  return menus;
}
