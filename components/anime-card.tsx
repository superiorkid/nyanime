import ChangeStatus from "@/components/change-status";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimeStatus, Prisma } from "@prisma/client";
import { Bookmark, Check, Eye, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AnimeCardProps {
  title: string;
  releasedYear: number;
  genre: string;
  image_url: string;
  malId: number;
  score: number;
  user: Prisma.UserGetPayload<{
    include: {
      animeStatus: { include: { anime: true } };
    };
  }> | null;
}

const AnimeCard = ({
  genre,
  releasedYear,
  title,
  image_url,
  malId,
  score,
  user,
}: AnimeCardProps) => {
  return (
    <Card className="overflow-hidden border-0 group/card rounded-2xl">
      <CardContent className="p-0 m-0 rounded-2xl">
        <Link href={`/anime/${malId}`} scroll>
          <div className="relative h-[278px] w-full">
            <Image
              fill
              src={image_url}
              alt={`card image`}
              className="object-cover hover:scale-105 transition-all duration-300 brightness-75 hover:brightness-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              decoding="async"
              quality={75}
            />

            <Badge className="absolute h-9 top-0 left-1/2 -translate-x-1/2 rounded-x-none rounded-t-none rounded-b-md -mt-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              <Star className="w-4 h-5 mr-2" />
              {score}
            </Badge>

            {user && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-background text-sm opacity-0 transition-opacity group-hover/card:opacity-100 flex space-x-1.5">
                <ChangeStatus
                  buttonSize="icon"
                  genre={genre}
                  image_url={image_url}
                  malId={malId}
                  title={title}
                  score={score}
                  releasedYear={releasedYear}
                  status={AnimeStatus.TO_WATCH}
                  isActive={
                    user.animeStatus.find(({ anime }) => +anime.malId === malId)
                      ?.status === "TO_WATCH"
                  }
                >
                  <Bookmark
                    className={cn(
                      "w-5 h-5 stroke-zinc-400 group-hover/dislike-btn:stroke-background",
                      user.animeStatus.find(
                        ({ anime }) => +anime.malId === malId
                      )?.status === "TO_WATCH" && "stroke-foreground"
                    )}
                  />
                </ChangeStatus>
                <ChangeStatus
                  buttonSize="icon"
                  genre={genre}
                  image_url={image_url}
                  malId={malId}
                  title={title}
                  score={score}
                  releasedYear={releasedYear}
                  status={AnimeStatus.WATCHING}
                  isActive={
                    user.animeStatus.find(({ anime }) => +anime.malId === malId)
                      ?.status === "WATCHING"
                  }
                >
                  <Eye
                    className={cn(
                      "w-5 h-5 stroke-zinc-400 group-hover/like-btn:stroke-background",
                      user.animeStatus.find(
                        ({ anime }) => +anime.malId === malId
                      )?.status === "WATCHING" && "stroke-foregrond"
                    )}
                  />
                </ChangeStatus>
                <ChangeStatus
                  buttonSize="icon"
                  genre={genre}
                  image_url={image_url}
                  malId={malId}
                  title={title}
                  score={score}
                  releasedYear={releasedYear}
                  status={AnimeStatus.WATCHED}
                  isActive={
                    user.animeStatus.find(({ anime }) => +anime.malId === malId)
                      ?.status === "WATCHED"
                  }
                >
                  <Check
                    className={cn(
                      "w-5 h-5 stroke-zinc-400 group-hover/dislike-btn:stroke-background",
                      user.animeStatus.find(
                        ({ anime }) => +anime.malId === malId
                      )?.status === "WATCHED" && "stroke-foreground"
                    )}
                  />
                </ChangeStatus>
              </div>
            )}

            <div className="absolute bottom-0 left-0 m-2 text-background text-sm group-hover/card:hidden">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-zinc-300">
                <span>{releasedYear ? releasedYear : null},</span> {genre}
              </p>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
