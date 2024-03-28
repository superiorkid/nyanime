import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useLibraryTabs() {
    const pathname = usePathname()

    const menus = useMemo<{ label: string, href: string, isActive: boolean }[]>(() => [
        { href: "/:username/library/watching", label: "Watching", isActive: pathname === "/:username/library/watching" },
        { href: "/:username/library/to-watch", label: "To Watch", isActive: pathname === "/:username/library/to-watch" },
        { href: "/:username/library/watched", label: "Watched", isActive: pathname === "/:username/library/watched" },
        { href: "/:username/library/collections", label: "Collections", isActive: pathname === "/:username/library/collections" }
    ], [pathname])

    return menus
}