import { Button, buttonVariants } from "@/components/ui/button";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

interface NewsHeroProps {
  title: string;
  date: string;
  forumUrl: string;
}

const NewsHero = ({ title, date, forumUrl }: NewsHeroProps) => {
  return (
    <section className="min-h-[64dvh] pt-16 grid grid-cols-2 items-center">
      <div>
        <div className="space-y-4">
          <p className="font-medium text-zinc-400">{dayjs(date).fromNow()}</p>
          <h1 className="text-5xl font-bold">{title}</h1>
          <Link
            href={forumUrl}
            target="_blank"
            className={buttonVariants({
              variant: "secondary",
              size: "lg",
              className: "font-semibold",
            })}
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
