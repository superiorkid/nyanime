"use client";

import Container from "@/components/container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { Bookmark, Check, Eye } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import LibrarySort from "./library-sort";

interface LibraryTabsProps {
  user: Prisma.UserGetPayload<{
    include: {
      animeStatus: { include: { anime: true } };
    };
  }> | null;
}

const LibraryTabs = ({ user }: LibraryTabsProps) => {
  const router = useRouter();
  const pathanme = usePathname();

  return (
    <Container className="my-5 flex overflow-x-auto space-x-5 justify-between items-center border-b py-2.5 border-muted-foreground">
      <Tabs defaultValue="watching">
        <TabsList className="flex space-x-8 bg-foreground">
          <TabsTrigger
            value="watching"
            onClick={(event) => {
              event.preventDefault();
              router.push(`/${user?.username}/library/watching`);
            }}
            className={cn(
              "bg-transparent",
              pathanme === `/${user?.username}/library/watching` &&
                "text-background font-semibold"
            )}
          >
            <Eye className="w-5 h-5 mr-2" />
            Watching
            <span className="ml-2">
              {
                user?.animeStatus.filter((anime) => anime.status === "WATCHING")
                  .length
              }
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="toWatch"
            onClick={(event) => {
              event.preventDefault();
              router.push(`/${user?.username}/library/to-watch`);
            }}
            className={cn(
              "bg-transparent",
              pathanme === `/${user?.username}/library/to-watch` &&
                "text-background font-semibold"
            )}
          >
            <Bookmark className="w-5 h-5 mr-2" />
            To Watch
            <span className="ml-2">
              {
                user?.animeStatus.filter((anime) => anime.status === "TO_WATCH")
                  .length
              }
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="watched"
            onClick={(event) => {
              event.preventDefault();
              router.push(`/${user?.username}/library/watched`);
            }}
            className={cn(
              "bg-transparent",
              pathanme === `/${user?.username}/library/watched` &&
                "text-background font-semibold"
            )}
          >
            <Check className="w-5 h-5 mr-2" />
            Watched
            <span className="ml-2">
              {
                user?.animeStatus.filter((anime) => anime.status === "WATCHED")
                  .length
              }
            </span>
          </TabsTrigger>
          {/* <TabsTrigger
            value="collections"
            onClick={(event) => {
              event?.preventDefault();
              router.push(`/${user?.username}/library/collections`);
            }}
            className={cn(
              "bg-transparent",
              pathanme === `/${user?.username}/library/collections` &&
                "text-background font-semibold"
            )}
          >
            <Folder className="w-5 h-5 mr-2" />
            Collections<span className="ml-2">6</span>
          </TabsTrigger> */}
        </TabsList>
      </Tabs>
      <div>
        <LibrarySort />
      </div>
    </Container>
  );
};

export default LibraryTabs;
