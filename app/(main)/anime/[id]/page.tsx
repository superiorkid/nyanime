import { getAnimeFullById } from "@/actions/anime.action";
import OverviewTabsContent from "@/components/overview-tabs-content";
import type { Metadata } from "next";

interface AnimeDetailProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: AnimeDetailProps): Promise<Metadata> {
  const anime = await getAnimeFullById(+id);

  return {
    title: `Anime Overview - Explore Details of ${anime.title} on Nyanime`,
    description: `Discover everything you need to know about ${anime.title} on Nyanime's Overview page. Explore details such as airing status, synopsis, and more. Dive into the world of [Anime Name] and immerse yourself in its captivating story and characters.`,
  };
}

const AnimeDetail = async ({ params: { id } }: AnimeDetailProps) => {
  const anime = await getAnimeFullById(+id);

  return <OverviewTabsContent anime={anime} />;
};

export default AnimeDetail;
