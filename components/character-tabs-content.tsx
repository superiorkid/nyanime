import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Data } from "@/types/Character";
import Image from "next/image";

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
              <Card className="overflow-hidden border-0 group/card rounded-2xl">
                <CardContent className="p-0 m-0 rounded-2xl">
                  <div className="relative h-[278px] w-full">
                    <Image
                      fill
                      src={character.character.images.webp.image_url}
                      alt={`${character.character.name} Image`}
                      className="object-cover group-hover/card:hidden brightness-75"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      decoding="async"
                    />

                    <Image
                      fill
                      src={
                        character.voice_actors.find(
                          (actor) => actor.language === "Japanese"
                        )?.person.images.jpg.image_url!
                      }
                      alt={`card image`}
                      className="object-cover hidden group-hover/card:block brightness-75"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="absolute bottom-0 left-0 m-2 text-background text-sm group-hover/card:hidden">
                      <h3 className="font-semibold">
                        {character.character.name}
                      </h3>
                      <p className="text-zinc-300">{character.role}</p>
                    </div>

                    <div className="absolute bottom-0 left-0 m-2 text-background text-sm group-hover/card:block hidden">
                      <h3 className="font-semibold">
                        {
                          character.voice_actors.find(
                            (voiceActor) => voiceActor.language === "Japanese"
                          )?.person.name!
                        }
                      </h3>
                      <p className="text-zinc-300">Seiyu, Voice Actor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
