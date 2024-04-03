import { getAnimeFullById, getAnimeReview } from "@/actions/anime.action";
import ReviewTabsContent from "@/components/review-tabs-content";
import React from "react";
import type { Metadata } from "next";

interface ReviewsPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: ReviewsPageProps): Promise<Metadata> {
  const anime = await getAnimeFullById(+id);

  return {
    title: `Reviews - What Fans Are Saying About ${anime.title} on Nyanime`,
    description: `Read reviews and share your thoughts on ${anime.title} on Nyanime's Review page. Discover what fellow fans have to say about the anime and contribute your own insights. Join the conversation and celebrate the impact of ${anime.title} within the anime community.`,
  };
}

const ReviewsPage = async ({ params: { id } }: ReviewsPageProps) => {
  const reviews = await getAnimeReview(+id);

  return <ReviewTabsContent reviews={reviews.data} />;
};

export default ReviewsPage;
