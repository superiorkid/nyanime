"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAnimeDetailTabs } from "@/hooks/useAnimeDetailTabs";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const MenuTabs = () => {
  const tabs = useAnimeDetailTabs();
  const router = useRouter();

  return (
    <Tabs defaultValue="overview" className="overflow-x-auto">
      <TabsList className="space-x-8 bg-secondary-foreground h-14 mb-8">
        {tabs.map((tab, index) => (
          <TabsTrigger
            value={tab.label}
            className={cn(
              "h-full capitalize bg-transparent",
              tab.isActive && "bg-background"
            )}
            key={index}
            onClick={(event) => {
              event.preventDefault();
              router.push(tab.href);
            }}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default MenuTabs;
