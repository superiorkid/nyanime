import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

export function useAnimeDetailTabs() {
  const pathname = usePathname();
  const { id } = useParams();

  const menus = useMemo<{ label: string; href: string; isActive: boolean }[]>(
    () => [
      {
        label: "overview",
        href: `/anime/${id}`,
        isActive: pathname === `/anime/${id}`,
      },
      {
        label: "characters",
        href: `/anime/${id}/characters`,
        isActive: pathname === `/anime/${id}/characters`,
      },
      {
        label: "staff",
        href: `/anime/${id}/staff`,
        isActive: pathname === `/anime/${id}/staff`,
      },
      {
        label: "reviews",
        href: `/anime/${id}/reviews`,
        isActive: pathname === `/anime/${id}/reviews`,
      },
    ],
    [pathname, id]
  );

  return menus;
}
