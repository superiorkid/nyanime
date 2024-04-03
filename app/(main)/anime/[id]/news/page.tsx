import React from "react";
import { getAnimeFullById, getNews } from "@/actions/anime.action";
import NewsTabsContent from "@/components/news-tabs-content";
import type { Metadata } from "next";

interface NewsPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: NewsPageProps): Promise<Metadata> {
  const anime = await getAnimeFullById(+id);

  return {
    title: `News - Stay Updated on ${anime.title} and More on Nyanime`,
    description: `Stay informed about the latest updates and announcements related to ${anime.title} and other anime on Nyanime's News page. Explore articles, interviews, and insights about your favorite anime series. Keep up with the latest happenings in the world of anime.`,
  };
}

async function NewsPage({ params: { id } }: NewsPageProps) {
  const news = await getNews(id);

  return <NewsTabsContent news={news.data} animeId={id} />;
}

export default NewsPage;
