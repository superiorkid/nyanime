import AnimeCard from "@/components/anime-card";
import { Button } from "@/components/ui/button";

const AnimeCards = () => {
  return (
    <div className="flex-1 space-y-5">
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <AnimeCard key={index} />
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
