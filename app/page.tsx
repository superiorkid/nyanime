import AnimeTopWallpaper from "@/components/anime-top-wallpaper";
import Container from "@/components/container";
import FeaturedCollectionSection from "@/components/featured-collection-section";
import ForYouSection from "@/components/for-you-section";
import Hero from "@/components/hero";
import MostPopularSection from "@/components/most-popular-section";
import TrendingNowSection from "@/components/trending-now-section";

export default function Home() {
  return (
    <main>
      <Container>
        <AnimeTopWallpaper />
        <Hero />
        <ForYouSection />
        <FeaturedCollectionSection />
        <TrendingNowSection />
        <MostPopularSection />
      </Container>
    </main>
  );
}
