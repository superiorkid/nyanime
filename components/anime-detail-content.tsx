import CharacterTabsContent from "@/components/character-tabs-content";
import OverviewTabsContent from "@/components/overview-tabs-content";
import ReviewTabsContent from "@/components/review-tabs-content";
import StaffTabsContent from "@/components/staff-tabs-content";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Data } from "@/types/Anime";
import { Characters } from "@/types/Character";
import { Reviews } from "@/types/Reviews";
import { Staff } from "@/types/Staff";
import { Link, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";

interface AnimeDetailContentProps {
  anime: Data;
  characters: Characters;
  reviews: Reviews;
  staff: Staff;
}

const AnimeDetailContent = ({
  anime,
  characters,
  reviews,
  staff,
}: AnimeDetailContentProps) => {
  return (
    <section className="mb-12">
      <Tabs defaultValue="overview">
        <TabsList className="space-x-8 bg-secondary-foreground h-14 mb-5">
          <TabsTrigger value="overview" className="h-full">
            Overview
          </TabsTrigger>
          <TabsTrigger value="relations" className="h-full">
            Relations
          </TabsTrigger>
          <TabsTrigger value="characters" className="h-full">
            Characters
          </TabsTrigger>
          <TabsTrigger value="staff" className="h-full">
            Staff
          </TabsTrigger>
          <TabsTrigger value="reviews" className="h-full">
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <OverviewTabsContent anime={anime} />
        </TabsContent>
        <TabsContent value="relations">
          <h1 className="text-xl font-semibold">Chronology</h1>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full mt-5"
          >
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
                  <Card className="overflow-hidden border-0 group/card rounded-2xl">
                    <CardContent className="p-0 m-0 rounded-2xl">
                      <Link href={`/anime/123123`}>
                        <div className="relative h-[278px] w-full">
                          <Image
                            fill
                            src={`https:\/\/cdn.myanimelist.net\/images\/anime\/1299\/110774l.webp`}
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
                            <h3 className="font-semibold">Anime Title</h3>
                            <p className="text-zinc-300">2024, Ecchi</p>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="secondary" className="ml-8" />
            <CarouselNext variant="secondary" className="mr-8" />
          </Carousel>
        </TabsContent>

        <TabsContent value="characters">
          <CharacterTabsContent characters={characters.data} />
        </TabsContent>
        <TabsContent value="staff">
          <StaffTabsContent staffs={staff.data} />
        </TabsContent>
        <TabsContent value="reviews">
          <ReviewTabsContent reviews={reviews.data} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default AnimeDetailContent;
