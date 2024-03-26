import { getAnimeFullById } from "@/actions/anime.action";
import OverviewTabsContent from "@/components/overview-tabs-content";

interface AnimeDetailProps {
  params: {
    id: string;
  };
}

const AnimeDetail = async ({ params: { id } }: AnimeDetailProps) => {
  const anime = await getAnimeFullById(+id);

  return <OverviewTabsContent anime={anime} />;
};

export default AnimeDetail;
