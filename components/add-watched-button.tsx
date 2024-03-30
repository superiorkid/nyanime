"use client";

import { addToWatchedList } from "@/actions/user.action";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface AddWatchedButtonProps {
  title: string;
  releasedYear: number;
  genre: string;
  image_url: string;
  malId: number;
  score: number;
  currentUserWatced: Prisma.WatchedGetPayload<{ include: { anime: true } }>[];
}

const AddWatchedButton = ({
  currentUserWatced,
  genre,
  image_url,
  malId,
  releasedYear,
  score,
  title,
}: AddWatchedButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const addToWatchedListButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    startTransition(async () => {
      await addToWatchedList({
        genre,
        malId,
        releasedYear,
        score,
        title,
        imageUrl: image_url,
      }).then((_) => {
        router.refresh();
      });
    });
  };

  return (
    <Button
      size="icon"
      className={cn(
        "rounded-full h-12 w-12 group/dislike-btn",
        currentUserWatced.some(({ anime }) => +anime.malId === malId) &&
          "bg-emerald-500 hover:bg-emerald-500/50"
      )}
      onClick={addToWatchedListButton}
    >
      {isPending ? (
        <Loader2 className="w-5 h-5 stroke-zinc-400 animate-spin" />
      ) : (
        <Check
          className={cn(
            "w-5 h-5 stroke-zinc-400 group-hover/dislike-btn:stroke-background",
            currentUserWatced.some(({ anime }) => +anime.malId === malId) &&
              "stroke-foreground"
          )}
        />
      )}
    </Button>
  );
};

export default AddWatchedButton;
