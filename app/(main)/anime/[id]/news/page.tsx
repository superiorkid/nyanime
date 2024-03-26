import React from "react";
import { getNews } from "@/actions/anime.action";
import NewsTabsContent from "@/components/news-tabs-content";

interface NewsPageProps {
  params: {
    id: string;
  };
}

async function NewsPage({ params: { id } }: NewsPageProps) {
  const news = await getNews(id);

  return <NewsTabsContent news={news.data} animeId={id} />;
}

export default NewsPage;
