import { getSeasonNow } from "@/actions/anime.action";
import Container from "@/components/container";
import ForYouSection from "@/components/for-you-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bookmark,
  Check,
  Eye,
  Plus,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AnimeDetailProps {
  params: {
    id: string;
  };
}

const AnimeDetail = async ({ params: { id } }: AnimeDetailProps) => {
  const [specialForYou] = await Promise.all([getSeasonNow({ limit: 25 })]);

  return (
    <main className="min-h-screen">
      <Container>
        <section className="absolute top-0 left-0 w-full h-[20rem] -z-30">
          <div className="relative h-full">
            <Image
              fill
              priority
              src={"https://cdn.myanimelist.net//images//anime//3//83528l.webp"}
              alt="background image"
              className="object-cover brightness-50"
              decoding="async"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>

        <section className="mt-36 flex space-x-6 items-center mb-12">
          <div className="w-96">
            <div className="relative h-[28rem] w-80 shadow">
              <Image
                fill
                loading="lazy"
                src="https://cdn.myanimelist.net//images//anime//1085//114792l.webp"
                alt="image"
                className="object-cover rounded-xl"
                decoding="async"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="flex-1 space-y-5">
            <h1 className="text-5xl font-bold">To Your Eternity</h1>
            <div className="font-medium">
              <Star className="inline-flex items-center w-5 h-5 mr-2" />
              8.83
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-secondary-foreground hover:bg-muted-foreground text-background"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Watching
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-secondary-foreground hover:bg-muted-foreground text-background"
                >
                  <Bookmark className="w-5 h-5 mr-2" />
                  To Watch
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-secondary-foreground hover:bg-muted-foreground text-background"
                >
                  <Check className="w-5 h-5 mr-2" />
                  Watched
                </Button>
              </div>
              <div>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-secondary-foreground hover:bg-muted-foreground text-background"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add to collection
                </Button>
              </div>
            </div>
          </div>
        </section>

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
              <div className="flex space-x-12">
                <aside className="w-80">
                  <h1 className="text-xl font-semibold">Details</h1>

                  <Table className="mt-5">
                    <TableBody>
                      <TableRow className="border-none h-6">
                        <TableCell className="text-zinc-400">Type</TableCell>
                        <TableCell>TV Show</TableCell>
                      </TableRow>
                      <TableRow className="border-none">
                        <TableCell className="text-zinc-400">
                          Episodes
                        </TableCell>
                        <TableCell>20</TableCell>
                      </TableRow>
                      <TableRow className="border-none">
                        <TableCell className="text-zinc-400">Genres</TableCell>
                        <TableCell>Adventure, Drama, Supernatural</TableCell>
                      </TableRow>
                      <TableRow className="border-none">
                        <TableCell className="text-zinc-400">Aired</TableCell>
                        <TableCell>Apr 12, 2021 to Aug 30, 2021</TableCell>
                      </TableRow>
                      <TableRow className="border-none">
                        <TableCell className="text-zinc-400">Status</TableCell>
                        <TableCell>Finished Airing</TableCell>
                      </TableRow>
                      <TableRow className="border-none">
                        <TableCell className="text-zinc-400">Season</TableCell>
                        <TableCell>Spring 2021</TableCell>
                      </TableRow>
                      <TableRow className="border-none">
                        <TableCell className="text-zinc-400">Studios</TableCell>
                        <TableCell>Brain&quot;s Base</TableCell>
                      </TableRow>
                      <TableRow className="border-none">
                        <TableCell className="text-zinc-400">Rating</TableCell>
                        <TableCell>R-17+</TableCell>
                      </TableRow>
                      <TableRow className="border-none">
                        <TableCell className="text-zinc-400">
                          Duration
                        </TableCell>
                        <TableCell>25 min.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </aside>
                <main className="flex-1 prose prose-lg prose-h1:text-xl prose-h1:font-semibold prose-h1:text-background prose-p:text-zinc-400">
                  <h1>Desciption</h1>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem earum doloribus corporis ut quis, enim ipsam repellat
                    quibusdam delectus perspiciatis dolorem ipsa ratione
                    nesciunt maxime hic labore, amet consectetur obcaecati!
                    Asperiores corporis fuga temporibus similique dolore
                    voluptatem adipisci facere cum repellendus eos saepe, vitae
                    quae, corrupti sequi recusandae dolor aspernatur.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi ea, commodi modi voluptatibus exercitationem
                    doloribus. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Corrupti pariatur dolores modi impedit
                    maxime! Totam, amet! Facilis error hic, ullam voluptates
                    earum ipsa eum in quas voluptatibus, praesentium, quia
                    aperiam.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis adipisci odio magnam tempore enim, porro
                    officiis nesciunt perferendis, nostrum at suscipit beatae
                    quod officia voluptatum numquam iusto quas natus rerum
                    provident deserunt in illo. Reiciendis necessitatibus
                    excepturi iste. Nostrum aperiam cum eligendi ipsum ipsam
                    nulla assumenda numquam pariatur rem quidem ut, saepe
                    distinctio suscipit esse adipisci consequatur accusamus
                    mollitia vel repellat temporibus illum dolore asperiores!
                    Repellat nesciunt itaque odit perferendis sapiente tenetur
                    excepturi dicta eius impedit quia. Eos!
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae deleniti qui quos necessitatibus animi error
                    tenetur voluptatibus fugit odit sint aliquam perferendis,
                    nulla earum ad, minus repellendus illum corrupti modi
                    impedit consectetur ipsam labore! Similique, architecto
                    quaerat. Recusandae quaerat minima veniam, ab doloribus
                    laborum aliquam?
                  </p>
                </main>
              </div>
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
                    <CarouselItem
                      key={index}
                      className="md:basis-1/3 lg:basis-1/6"
                    >
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
              <h1 className="text-xl font-semibold">Anime Characters</h1>

              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full mt-5"
              >
                <CarouselContent>
                  {Array.from({ length: 9 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/3 lg:basis-1/6"
                    >
                      <Card className="overflow-hidden border-0 group/card rounded-2xl">
                        <CardContent className="p-0 m-0 rounded-2xl">
                          <div className="relative h-[278px] w-full">
                            <Image
                              fill
                              src={`https:\/\/cdn.myanimelist.net\/images\/characters\/15\/97868.webp`}
                              alt={`card image`}
                              className="object-cover group-hover/card:hidden"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"
                              decoding="async"
                            />

                            <Image
                              fill
                              src={`https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/60991.jpg`}
                              alt={`card image`}
                              className="object-cover hidden group-hover/card:block"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"
                              decoding="async"
                            />

                            <div className="absolute bottom-0 left-0 m-2 text-background text-sm group-hover/card:hidden">
                              <h3 className="font-semibold">Anime Title</h3>
                              <p className="text-zinc-300">2024, Ecchi</p>
                            </div>

                            <div className="absolute bottom-0 left-0 m-2 text-background text-sm group-hover/card:block hidden">
                              <h3 className="font-semibold">Motoyasu</h3>
                              <p className="text-zinc-300">
                                Seiyu, Voice Actor
                              </p>
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
            </TabsContent>
            <TabsContent value="staff">
              <h1 className="text-xl font-semibold">Staff</h1>

              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full mt-5"
              >
                <CarouselContent>
                  {Array.from({ length: 9 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/3 lg:basis-1/6"
                    >
                      <Card className="overflow-hidden border-0 rounded-2xl">
                        <CardContent className="p-0 m-0 rounded-2xl">
                          <div className="relative h-[278px] w-full">
                            <Image
                              fill
                              src={`https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/48576.jpg`}
                              alt={`card image`}
                              className="object-cover brightness-75"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              loading="lazy"
                              decoding="async"
                            />

                            <div className="absolute bottom-0 left-0 m-2 text-background text-sm">
                              <h3 className="font-semibold">Hiroyuki Kagura</h3>
                              <p className="text-zinc-300">Director</p>
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
            </TabsContent>
            <TabsContent value="reviews">
              <div className="flex flex-col space-y-8 max-w-3xl">
                <div className="space-y-3 w-full">
                  <h1 className="text-xl font-semibold">Anime Characters</h1>

                  <Button variant="secondary" className="w-full" size="lg">
                    <Plus className="w-5 h-5 mr-2" />
                    Write a Review
                  </Button>
                </div>

                <div className="space-y-7">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div className="flex space-x-5" key={index}>
                      <div>
                        <div className="relative h-[50px] w-[50px]">
                          <Image
                            fill
                            src={`https:\/\/cdn.myanimelist.net\/images\/voiceactors\/2\/48576.jpg`}
                            alt={`card image`}
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex space-x-2">
                          <h1 className="font-medium">VioleDeGrace</h1>
                          <span className="text-zinc-500">12 October 2022</span>
                        </div>

                        <p className="text-sm leading-relaxed tracking-wide text-zinc-300">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Quos sequi repellendus dicta necessitatibus quas
                          et ullam perspiciatis mollitia vero minus sunt veniam
                          quis animi, vitae nulla! Non impedit labore
                          necessitatibus. Tempore at reiciendis quod corrupti
                          quis fuga id recusandae commodi laborum sapiente
                          quibusdam voluptatem voluptatum ducimus repellat,
                          fugit unde! Sunt.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <ForYouSection collections={specialForYou.data} />
      </Container>
    </main>
  );
};

export default AnimeDetail;
