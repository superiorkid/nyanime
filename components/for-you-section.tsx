import AnimeCard from "@/components/anime-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Data } from "@/types/Anime";
import { User } from "@prisma/client";

interface ForYouSectionProps {
  collections: Data[];
  user: User | null;
}

const ForYouSection = ({ collections, user }: ForYouSectionProps) => {
  return (
    <section className="min-h-[38dvh] grid grid-cols-1 items-center mb-16">
      <div className="space-y-3.5">
        <h1 className="text-2xl font-bold">Special For You</h1>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {collections.map((anime, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                <AnimeCard
                  isAuth={!!user}
                  title={anime.title}
                  releasedYear={anime.year!}
                  genre={anime.genres.at(0)?.name!}
                  image_url={anime.images.webp.large_image_url}
                  malId={anime.mal_id}
                  score={anime.score}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="secondary" className="ml-8" />
          <CarouselNext variant="secondary" className="mr-8" />
        </Carousel>
      </div>
    </section>
  );
};

export default ForYouSection;
