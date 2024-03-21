import React from "react";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[64dvh] pt-16 grid grid-cols-2 items-center">
      <div>
        <div className="max-w-md space-y-4">
          <h1 className="text-6xl font-bold">Chinsaw Man</h1>
          <p className="text-lg font-medium">
            Denji has a simple dream -- to live a happy and peaceful life,
            spending time with a girl
          </p>
          <div className="flex space-x-2 items-center">
            <Button variant="secondary" size="lg" className="font-semibold">
              Learn More
            </Button>
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
