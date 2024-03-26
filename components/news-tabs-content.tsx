import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import dayjs from "dayjs";
import { Data } from "@/types/News";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

interface NewsTabsContentProps {
  news: Data[];
  animeId: string;
}

function NewsTabsContent({ news, animeId }: NewsTabsContentProps) {
  return (
    <>
      <div className="flex justify-between items-center border-b py-2">
        <h1 className="text-xl font-semibold">Latest News</h1>
        <Link
          href={`/news?malid=${animeId}`}
          className={buttonVariants({
            variant: "link",
            className: "text-zinc-400",
          })}
        >
          Read More
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>

      <div className="flex flex-col divide-y mt-3">
        {news.slice(0, 5).map((news) => (
          <div className="flex space-x-5 py-3 items-center">
            <div className="relative w-[150px] h-[190px]">
              <Image
                fill
                src={news.images.jpg.image_url}
                alt={`${news.title} image`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-2.5">
                <h1 className="font-semibold text-sky-600 text-xl">
                  {news.title}
                </h1>
                <p className="leading-relaxed text-lg">
                  {news.excerpt}{" "}
                  <Button
                    variant="link"
                    size="sm"
                    className="text-muted-foreground inline-flex"
                  >
                    read more
                  </Button>
                </p>
                <div className="text-zinc-400">
                  <span>{dayjs(news.date).fromNow()}</span> by{" "}
                  <span>{news.author_username}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewsTabsContent;