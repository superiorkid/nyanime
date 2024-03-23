import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  title: string;
  synopsis: string;
  malId: number;
}

const Hero = ({ title, synopsis, malId }: HeroProps) => {
  return (
    <section className="min-h-[64dvh] pt-16 grid grid-cols-2 items-center">
      <div>
        <div className="max-w-md space-y-4">
          <h1 className="text-6xl font-bold">{title}</h1>
          <p className="text-lg font-medium line-clamp-3">{synopsis}</p>
          <div className="flex space-x-2 items-center">
            <Link
              href={`/anime/${malId}`}
              className={buttonVariants({
                className: "font-semibold",
                variant: "secondary",
                size: "lg",
              })}
            >
              Learn More
            </Link>
            <Button
              variant="secondary"
              size="lg"
              className="font-semibold bg-foreground text-background hover:bg-muted-foreground"
            >
              <Bookmark className="w-5 h-5 mr-2" />
              To Watch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
