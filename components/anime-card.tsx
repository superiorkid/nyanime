import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

interface AnimeCardProps {
  title: string;
  releasedYear: number;
  genre: string;
  image_url: string;
  malId: number;
}

const AnimeCard = ({
  genre,
  releasedYear,
  title,
  image_url,
  malId,
}: AnimeCardProps) => {
  return (
    <Card className="overflow-hidden border-0 group/card rounded-2xl">
      <CardContent className="p-0 m-0 rounded-2xl">
        <Link href={`/anime/${malId}`}>
          <div className="relative h-[278px] w-full">
            <Image
              fill
              src={image_url}
              alt={`card image`}
              className="object-cover hover:scale-105 transition-all duration-300 brightness-75 hover:brightness-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-background text-sm hidden group-hover/card:flex group-hover/card:space-x-3">
              <Button
                size="icon"
                className="rounded-full h-12 w-12 group/like-btn"
              >
                <ThumbsUp className="w-5 h-5 stroke-zinc-400 group-hover/like-btn:stroke-background" />
              </Button>
              <Button
                size="icon"
                className="rounded-full h-12 w-12 group/dislike-btn"
              >
                <ThumbsDown className="w-5 h-5 stroke-zinc-400 group-hover/dislike-btn:stroke-background" />
              </Button>
            </div>

            <div className="absolute bottom-0 left-0 m-2 text-background text-sm group-hover/card:hidden">
              <h3 className="font-semibold">{title}</h3>
              <p className="text-zinc-300">
                {releasedYear}, {genre}
              </p>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
