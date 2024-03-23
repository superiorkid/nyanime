import AnimeCard from "@/components/anime-card";
import { Button } from "@/components/ui/button";
import { Data } from "@/types/Anime";

interface AnimeCardsProps {
  collections: Data[];
}

const AnimeCards = ({ collections }: AnimeCardsProps) => {
  return (
    <div className="flex-1 space-y-5">
      <div className="grid grid-cols-5 gap-4">
        {collections.map((anime, index) => (
          <AnimeCard
            key={index}
            title={anime.title}
            releasedYear={anime.year!}
            genre={anime.genres.at(0)?.name!}
            image_url={anime.images.webp.large_image_url}
          />
        ))}
      </div>
      <Button
        size="lg"
        className="w-full bg-background text-foreground hover:bg-muted-foreground hover:text-background"
      >
        Show More
      </Button>
    </div>
  );
};

export default AnimeCards;
