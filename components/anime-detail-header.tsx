import { Button } from "@/components/ui/button";
import { Bookmark, Check, Eye, Plus, Star } from "lucide-react";
import Image from "next/image";

interface AnimeDetailHeaderProps {
  imageSrc: string;
  title: string;
  score: number;
}

const AnimeDetailHeader = ({
  imageSrc,
  score,
  title,
}: AnimeDetailHeaderProps) => {
  return (
    <section className="mt-36 flex space-x-6 items-center mb-12">
      <div className="w-96">
        <div className="relative h-[28rem] w-80 shadow">
          <Image
            fill
            loading="lazy"
            src={imageSrc}
            alt="image"
            className="object-cover rounded-xl"
            decoding="async"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex-1 space-y-5">
        <h1 className="text-5xl font-bold">{title}</h1>
        <div className="font-medium">
          <Star className="inline-flex items-center w-5 h-5 mr-2" />
          {score}
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
  );
};

export default AnimeDetailHeader;
