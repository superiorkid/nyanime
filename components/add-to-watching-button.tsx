"use client";

import { addToWatchingList } from "@/actions/user.action";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { Eye, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

interface AddToWatchingButtonProps {
  title: string;
  releasedYear: number;
  genre: string;
  image_url: string;
  malId: number;
  score: number;
  currentUserWatchings: Prisma.WatchingGetPayload<{
    include: { anime: true };
  }>[];
}

const AddToWatchingButton = ({
  genre,
  image_url,
  malId,
  releasedYear,
  score,
  title,
  currentUserWatchings,
}: AddToWatchingButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const addToWathingListHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    startTransition(() => {
      addToWatchingList({
        genre,
        malId,
        releasedYear,
        score,
        title,
        imageUrl: image_url,
      }).then(() => {
        router.refresh();
      });
    });
  };

  return (
    <Button
      size="icon"
      className={cn(
        "rounded-full h-12 w-12 group/like-btn",
        currentUserWatchings.some(({ anime }) => +anime.malId === malId) &&
          "bg-emerald-500 hover:bg-emerald-500/50"
      )}
      onClick={addToWathingListHandler}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="w-5 h-5 stroke-zinc-400 animate-spin" />
      ) : (
        <Eye
          className={cn(
            "w-5 h-5 stroke-zinc-400 group-hover/like-btn:stroke-background",
            currentUserWatchings.some(({ anime }) => +anime.malId === malId) &&
              "stroke-foregrond"
          )}
        />
      )}
    </Button>
  );
};

export default AddToWatchingButton;
