import { getSeasonNow, getTopAnime } from "@/actions/anime.action";
import AnimeTopWallpaper from "@/components/anime-top-wallpaper";
import Container from "@/components/container";
import FeaturedCollectionSection from "@/components/featured-collection-section";
import ForYouSection from "@/components/for-you-section";
import Hero from "@/components/hero";
import MostPopularSection from "@/components/most-popular-section";
import TrendingNowSection from "@/components/trending-now-section";

export default async function Home() {
  const [forYouSelection, trendingNow, mostPopular] = await Promise.all([
    getSeasonNow({ limit: 25 }),
    getTopAnime({ limit: 25, filter: "airing", rating: "r17" }),
    getTopAnime({ limit: 18, filter: "bypopularity", rating: "pg13" }),
  ]);

  return (
    <main>
      <Container>
        <AnimeTopWallpaper
          imageUrl={forYouSelection.data.at(0)?.images.webp.large_image_url!}
        />
        <Hero
          malId={forYouSelection.data.at(0)?.mal_id!}
          title={forYouSelection.data.at(0)?.title!}
          synopsis={forYouSelection.data.at(0)?.synopsis!}
        />
        <ForYouSection
          collections={forYouSelection.data.slice(
            1,
            forYouSelection.data.length
          )}
        />
        {/*<FeaturedCollectionSection />*/}
        <TrendingNowSection collections={trendingNow.data} />
        <MostPopularSection collections={mostPopular.data} />
      </Container>
    </main>
  );
}
