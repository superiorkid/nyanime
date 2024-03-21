import AnimeTopWallpaper from "@/components/anime-top-wallpaper";
import Container from "@/components/container";
import News from "@/components/news";
import NewsHero from "@/components/news-hero";

const NewsPage = () => {
  return (
    <main className="min-h-screen">
      <Container>
        <AnimeTopWallpaper />
        <NewsHero />
        <News />
      </Container>
    </main>
  );
};

export default NewsPage;
