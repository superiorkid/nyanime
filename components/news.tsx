import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Data } from "@/types/News";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface NewsProps {
  news: Data[];
}

const News = ({ news }: NewsProps) => {
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
        {news.map((news, index) => (
          <Card className={cn(`border-none`, getColsSpan(index))} key={index}>
            <CardContent className="relative h-full">
              <Image
                fill
                src={news.images.jpg.image_url}
                alt={`${news.title} image`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover brightness-50"
              />

              <div className="absolute bottom-0 left-0 m-3 text-background">
                <p className="text-zinc-200 font-medium">
                  {dayjs(news.date).fromNow()}
                </p>
                <h1 className="font-black text-xl tracking-wide">
                  {news.title}
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
