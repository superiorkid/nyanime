"use client";

import { addUserAnimeStatus } from "@/actions/user.action";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimeStatus } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

interface ChangeStatusProps {
  title: string;
  releasedYear: number;
  genre: string;
  image_url: string;
  malId: number;
  score: number;
  children: React.ReactNode;
  isActive: boolean;
  status: AnimeStatus;
  buttonSize?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

const ChangeStatus = ({
  genre,
  image_url,
  malId,
  releasedYear,
  score,
  title,
  children,
  isActive,
  status,
  buttonSize = "default",
}: ChangeStatusProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const changeStatusHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    startTransition(async () => {
      await addUserAnimeStatus({
        genre,
        title,
        score,
        malId,
        releasedYear,
        status,
        imageUrl: image_url,
      }).then(() => router.refresh());
    });
  };

  return (
    <Button
      size={buttonSize}
      className={cn(
        "rounded-full h-12 w-12 group/like-btn",
        isActive && "bg-emerald-500 hover:bg-emerald-500/50"
      )}
      onClick={changeStatusHandler}
      disabled={isPending}
    >
      {isPending ? (
        <Loader2 className="w-5 h-5 stroke-zinc-400 animate-spin" />
      ) : (
        <>{children}</>
      )}
    </Button>
  );
};

export default ChangeStatus;
