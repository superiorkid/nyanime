import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Data } from "@/types/Reviews";
import { Plus, Terminal } from "lucide-react";
import Image from "next/image";

interface ReviewTabsContentProps {
  reviews: Data[];
}

const ReviewTabsContent = ({ reviews }: ReviewTabsContentProps) => {
  return (
    <div className="flex flex-col space-y-8 max-w-3xl">
      <div className="space-y-3 w-full">
        <h1 className="text-xl font-semibold">Anime Characters</h1>

        <Button variant="secondary" className="w-full" size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Write a Review
        </Button>
      </div>

      <div className="space-y-7">
        {reviews.length !== 0 ? (
          reviews.map((review, index) => (
            <div className="flex space-x-5" key={index}>
              <div>
                <div className="relative h-[50px] w-[50px]">
                  <Image
                    fill
                    src={review.user.images.webp.image_url}
                    alt={`${review.user.username} Image`}
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                  sequi repellendus dicta necessitatibus quas et ullam
                  perspiciatis mollitia vero minus sunt veniam quis animi, vitae
                  nulla! Non impedit labore necessitatibus. Tempore at
                  reiciendis quod corrupti quis fuga id recusandae commodi
                  laborum sapiente quibusdam voluptatem voluptatum ducimus
                  repellat, fugit unde! Sunt.
                </p>
              </div>
            </div>
          ))
        ) : (
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>No Reviews</AlertTitle>
            <AlertDescription>
              No reviews currently available for the specified anime title.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ReviewTabsContent;
