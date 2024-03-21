import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

const News = () => {
  const getColsSpan = (index: number) => {
    switch (index % 10) {
      case 2:
      case 3:
      case 4:
      case 7:
      case 8:
      case 9:
        return "col-span-2 aspect-square";
      case 0:
      case 1:
      case 5:
      case 6:
      case 10:
      default:
        return "col-span-3 aspect-video";
    }
  };

  return (
    <section className="mb-16 space-y-5">
      <div className="grid grid-cols-6 gap-x-4 gap-y-8">
        {Array.from({ length: 7 }).map((_, index) => (
          <Card className={cn(`border-none`, getColsSpan(index))} key={index}>
            <CardContent className="relative h-full">
              <Image
                fill
                src="https://static.wikia.nocookie.net/bleach/images/6/6f/Bleach_Official_Bootleg_Karaburi%2B.png/revision/latest?cb=20180208145907&path-prefix=en"
                alt="news image"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover brightness-50"
              />

              <div className="absolute bottom-0 left-0 m-3 text-background">
                <p className="text-zinc-200 font-medium">2 hours ago</p>
                <h1 className="font-black text-xl tracking-wide">
                  &quot;Sword Art Online: Progressive Movie - Kuraki Yuuyami No
                  Scherzo&quot; Anime Premiere Date
                </h1>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        className="w-full bg-background text-foreground hover:bg-muted-foreground hover:text-background"
        size="lg"
      >
        Show More
      </Button>
    </section>
  );
};

export default News;
