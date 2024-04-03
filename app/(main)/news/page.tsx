import AnimeTopWallpaper from "@/components/anime-top-wallpaper";
import Container from "@/components/container";
import News from "@/components/news";
import NewsHero from "@/components/news-hero";
import { notFound } from "next/navigation";
import { getAnimeFullById, getNews } from "@/actions/anime.action";
import type { Metadata } from "next";

interface NewsPageProps {
  searchParams: {
    malid: string;
  };
}

export async function generateMetadata({
  searchParams: { malid },
}: NewsPageProps): Promise<Metadata> {
  const anime = await getAnimeFullById(+malid);

  return {
    title: `${anime.title} News - Extended Coverage on Nyanime`,
    description: `Explore extended coverage and in-depth articles about ${anime.title} on Nyanime's More News page. Stay updated with exclusive interviews, behind-the-scenes insights, and the latest developments related to ${anime.title}. Dive deeper into the world of ${anime.title} and enrich your anime experience.`,
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
          date={news.data.at(0)!.date!}
          title={news.data.at(0)!.title!}
          forumUrl={news.data.at(0)!.forum_url}
        />
        <News news={news.data.slice(1, news.data.length)} />
      </Container>
    </main>
  );
};

export default NewsPage;
