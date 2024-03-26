import { getAnimeReview } from "@/actions/anime.action";
import ReviewTabsContent from "@/components/review-tabs-content";
import React from "react";

interface ReviewsPageProps {
  params: { id: string };
}

const ReviewsPage = async ({ params: { id } }: ReviewsPageProps) => {
  const reviews = await getAnimeReview(+id);

  return <ReviewTabsContent reviews={reviews.data} />;
};

export default ReviewsPage;
