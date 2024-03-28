"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bookmark, Check, Eye, Folder } from "lucide-react";
import Container from "./container";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";

interface LibraryTabsProps {
  user: User | null;
}

const LibraryTabs = ({ user }: LibraryTabsProps) => {
  const router = useRouter();
  const pathanme = usePathname();

  return (
    <Container className="my-5 flex justify-between items-center border-b py-2.5 border-muted-foreground">
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
            Watching<span className="ml-2">12</span>
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
            To Watch<span className="ml-2">34</span>
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
            Watched<span className="ml-2">80</span>
          </TabsTrigger>
          <TabsTrigger
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
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex space-x-5 items-center">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Filters" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </Container>
  );
};

export default LibraryTabs;
