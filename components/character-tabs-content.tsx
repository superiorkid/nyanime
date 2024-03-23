import CharcterCard from "@/components/character-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Data } from "@/types/Character";

interface CharacterTabsContentProps {
  characters: Data[];
}

const CharacterTabsContent = ({ characters }: CharacterTabsContentProps) => {
  return (
    <>
      <h1 className="text-xl font-semibold">Anime Characters</h1>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-5"
      >
        <CarouselContent>
          {characters.map((character, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
              <CharcterCard character={character} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="secondary" className="ml-8" />
        <CarouselNext variant="secondary" className="mr-8" />
      </Carousel>
    </>
  );
};

export default CharacterTabsContent;
