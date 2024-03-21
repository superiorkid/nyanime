import AnimeCard from "@/components/anime-card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MostPopularSection = () => {
  return (
    <section className="min-h-[38dvh] grid grid-cols-1 items-center mb-16">
      <div className="space-y-3.5">
        <h1 className="text-2xl font-bold">Most Popular</h1>

        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 18 }).map((_, index) => (
            <AnimeCard key={index} />
          ))}
        </div>

        <Link
          href="#show-more-page"
          className={cn(
            buttonVariants({
              size: "lg",
              className:
                "w-full bg-background text-foreground hover:bg-muted-foreground hover:text-background",
            })
          )}
        >
          Show More
        </Link>
      </div>
    </section>
  );
};

export default MostPopularSection;
