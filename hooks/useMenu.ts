import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useMenu() {
  const pathname = usePathname();

  const menus = useMemo<{ label: string; href: string; isActive: boolean }[]>(
    () => [
      { label: "Home", href: "/", isActive: pathname === "/" },
      { label: "Catalog", href: "/catalog", isActive: pathname === "/catalog" },
      { label: "News", href: "/news", isActive: pathname === "/news" },
      {
        label: "Collections",
        href: "/collections",
        isActive: pathname === "/collections",
      },
    ],
    [pathname]
  );

  return menus;
}
