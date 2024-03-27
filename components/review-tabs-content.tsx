import ReviewCard from "@/components/review-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Data } from "@/types/Reviews";
import { Plus, Terminal } from "lucide-react";

interface ReviewTabsContentProps {
  reviews: Data[];
}

const ReviewTabsContent = ({ reviews }: ReviewTabsContentProps) => {
  const comparedDateString = reviews.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getUTCFullYear() - dateA.getUTCFullYear();
  });

  return (
    <div className="flex flex-col space-y-8 max-w-3xl">
      <div className="space-y-3 w-full">
        <h1 className="text-xl font-semibold">Reviews</h1>

        <Button variant="secondary" className="w-full" size="lg">
          <Plus className="w-5 h-5 mr-2" />
          Write a Review
        </Button>
      </div>

      <div className="space-y-7">
        {reviews.length !== 0 ? (
          comparedDateString.map((review, index) => (
            <ReviewCard review={review} key={index} />
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
