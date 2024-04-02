import ChangeStatus from "@/components/change-status";
import { AnimeStatus, Prisma } from "@prisma/client";
import { Bookmark, Check, Dna, Eye, Star } from "lucide-react";
import Image from "next/image";

interface AnimeDetailHeaderProps {
  imageSrc: string;
  title: string;
  score: number;
  genre: string;
  malId: number;
  releaseYear: number;
  user: Prisma.UserGetPayload<{
    include: { animeStatus: { include: { anime: true } } };
  }> | null;
}

const AnimeDetailHeader = ({
  imageSrc,
  score,
  title,
  genre,
  malId,
  releaseYear,
  user,
}: AnimeDetailHeaderProps) => {
  return (
    <section className="mt-36 flex space-x-6 items-center mb-12">
      <div className="w-96">
        <div className="relative h-[28rem] w-80 shadow">
          <Image
            fill
            loading="lazy"
            src={imageSrc}
            alt="image"
            className="object-cover rounded-xl"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
          />
        </div>
      </div>
      <div className="flex-1 space-y-8">
        <h1 className="text-5xl font-bold">{title}</h1>
        {score && (
          <div className="font-medium">
            <Star className="inline-flex items-center w-5 h-5 mr-2" />
            {score}
          </div>
        )}
        <div className="flex items-center justify-between">
          {user && (
            <div className="flex items-center space-x-3">
              <ChangeStatus
                image_url={imageSrc}
                score={score}
                title={title}
                genre={genre}
                malId={malId}
                releasedYear={releaseYear}
                status={AnimeStatus.WATCHING}
                buttonSize="lg"
                isActive={
                  user?.animeStatus.find(({ anime }) => +anime.malId === malId)
                    ?.status === "WATCHING"
                }
                className="rounded-md h-11 w-auto"
              >
                <>
                  <Eye className="w-5 h-5 mr-2" />
                  Watching
                </>
              </ChangeStatus>
              <ChangeStatus
                image_url={imageSrc}
                score={score}
                title={title}
                genre={genre}
                malId={malId}
                releasedYear={releaseYear}
                status={AnimeStatus.TO_WATCH}
                buttonSize="lg"
                isActive={
                  user?.animeStatus.find(({ anime }) => +anime.malId === malId)
                    ?.status === "TO_WATCH"
                }
                className="rounded-md h-11 w-auto"
              >
                <>
                  <Bookmark className="w-5 h-5 mr-2" />
                  To Watch
                </>
              </ChangeStatus>
              <ChangeStatus
                image_url={imageSrc}
                score={score}
                title={title}
                genre={genre}
                malId={malId}
                releasedYear={releaseYear}
                status={AnimeStatus.WATCHED}
                buttonSize="lg"
                isActive={
                  user?.animeStatus.find(({ anime }) => +anime.malId === malId)
                    ?.status === "WATCHED"
                }
                className="rounded-md h-11 w-auto"
              >
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Watched
                </>
              </ChangeStatus>
            </div>
          )}

          {/* <div>
            <Button
              variant="secondary"
              size="lg"
              className="bg-secondary-foreground hover:bg-muted-foreground text-background"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add to collection
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AnimeDetailHeader;
