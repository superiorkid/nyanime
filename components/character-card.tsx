"use client";

import { Data } from "@/types/Character";
import Image from "next/image";
import { useReducer } from "react";
import { Card, CardContent } from "./ui/card";

interface CharactersPageProps {
  character: Data;
}

const CharcterCard = ({ character }: CharactersPageProps) => {
  const [isOpen, openToggle] = useReducer((state) => !state, false);

  return (
    <Card
      className="overflow-hidden border-0 group/card rounded-2xl bg-secondary-foreground"
      onMouseEnter={() => {
        openToggle();
      }}
      onMouseLeave={() => {
        openToggle();
      }}
    >
      <CardContent className="p-0 m-0 rounded-2xl">
        <div className="relative h-[278px] w-full">
          {isOpen ? (
            <>
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
                quality={75}
              />

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
            </>
          ) : (
            <>
              <Image
                fill
                src={character.character.images.webp.image_url}
                alt={`${character.character.name} Image`}
                className="object-cover group-hover/card:hidden brightness-75"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute bottom-0 left-0 m-2 text-background text-sm group-hover/card:hidden">
                <h3 className="font-semibold">{character.character.name}</h3>
                <p className="text-zinc-300">{character.role}</p>
              </div>
            </>
          )}

          {/* <Image
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
          /> */}

          {/* <div className="absolute bottom-0 left-0 m-2 text-background text-sm group-hover/card:block hidden">
            <h3 className="font-semibold">
              {
                character.voice_actors.find(
                  (voiceActor) => voiceActor.language === "Japanese"
                )?.person.name!
              }
            </h3>
            <p className="text-zinc-300">Seiyu, Voice Actor</p> 
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default CharcterCard;
