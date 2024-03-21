import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AnimeCollectionCard = () => {
  return (
    <Card className="overflow-hidden border-0 bg-zinc-900 space-y-6 rounded-2xl">
      <CardHeader className="flex items-center">
        <CardTitle className="text-xl [text-wrap:balance] text-center w-[201px] text-background">
          Top 20 Anime Romance
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 m-0 rounded-2xl px-6">
        <div className="flex items-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              className={cn(
                `relative h-[178px] w-full first:-rotate-12 last:rotate-12 first:left-6 last:right-6
              `
              )}
              key={index}
            >
              <Image
                fill
                src="https://images.unsplash.com/photo-1620336655055-088d06e36bf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={`card image ${index}`}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnimeCollectionCard;
