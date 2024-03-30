"use client";

import { addToWatchList } from "@/actions/user.action";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import { Bookmark, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface AddToWatchButtonProps {
  title: string;
  releasedYear: number;
  genre: string;
  image_url: string;
  malId: number;
  score: number;
  currentUserToWatch: Prisma.ToWatchGetPayload<{
    include: { anime: true };
  }>[];
}

const AddToWatchButton = ({
  currentUserToWatch,
  genre,
  image_url,
  malId,
  releasedYear,
  score,
  title,
}: AddToWatchButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const addToWatchListHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    startTransition(async () => {
      await addToWatchList({
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
        currentUserToWatch.some(({ anime }) => +anime.malId === malId) &&
          "bg-emerald-500 hover:bg-emerald-500/50"
      )}
      onClick={addToWatchListHandler}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="w-5 h-5 stroke-zinc-400 animate-spin" />
      ) : (
        <Bookmark
          className={cn(
            "w-5 h-5 stroke-zinc-400 group-hover/dislike-btn:stroke-background",
            currentUserToWatch.some(({ anime }) => +anime.malId === malId) &&
              "stroke-foreground"
          )}
        />
      )}
    </Button>
  );
};

export default AddToWatchButton;
