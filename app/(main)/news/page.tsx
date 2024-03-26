import AnimeTopWallpaper from "@/components/anime-top-wallpaper";
import Container from "@/components/container";
import News from "@/components/news";
import NewsHero from "@/components/news-hero";
import { notFound } from "next/navigation";
import { getNews } from "@/actions/anime.action";

interface NewsPageProps {
  searchParams: {
    malid: string;
  };
}

const NewsPage = async ({ searchParams: { malid } }: NewsPageProps) => {
  if (!malid) {
    notFound();
  }

  const news = await getNews(malid);

  return (
    <main className="min-h-screen">
      <Container>
        <AnimeTopWallpaper imageUrl={news.data.at(0)?.images.jpg.image_url!} />
        <NewsHero
          date={news.data.at(0)?.date!}
          title={news.data.at(0)?.title!}
        />
        <News news={news.data.slice(1, news.data.length)} />
      </Container>
    </main>
  );
};

export default NewsPage;
