import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface AnimeCardProps {
  title: string;
  releasedYear: number;
  genre: string;
  image_url: string;
  malId: number;
  score: number;
}

const AnimeCard = ({
  genre,
  releasedYear,
  title,
  image_url,
  malId,
  score,
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
            />

            <Badge className="absolute h-9 top-0 left-1/2 -translate-x-1/2 rounded-x-none rounded-t-none rounded-b-md -mt-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              <Star className="w-4 h-5 mr-2" />
              {score}
            </Badge>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-background text-sm opacity-0 transition-opacity group-hover/card:opacity-100 flex space-x-3">
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
