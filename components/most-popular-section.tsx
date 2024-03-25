import AnimeCard from "@/components/anime-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Data } from "@/types/Anime";
import Link from "next/link";

interface MostPopularSectionProps {
  collections: Data[];
}

const MostPopularSection = ({ collections }: MostPopularSectionProps) => {
  return (
    <section className="min-h-[38dvh] grid grid-cols-1 items-center mb-16">
      <div className="space-y-3.5">
        <h1 className="text-2xl font-bold">Most Popular</h1>

        <div className="grid grid-cols-6 gap-4">
          {collections.map((anime, index) => (
            <AnimeCard
              key={index}
              malId={anime.mal_id}
              genre={anime.genres.at(0)?.name!}
              image_url={anime.images.webp.large_image_url}
              releasedYear={anime.year!}
              title={anime.title}
              score={anime.score}
            />
          ))}
        </div>

        <Link
          href="#show-more-page"
          className={cn(
            buttonVariants({
              size: "lg",
              className:
                "w-full bg-background text-foreground hover:bg-muted-foreground hover:text-background",
            })
          )}
        >
          Show More
        </Link>
      </div>
    </section>
  );
};

export default MostPopularSection;
