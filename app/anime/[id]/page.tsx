import {
  getAnimeCharacters,
  getAnimeFullById,
  getAnimeReview,
  getAnimeStaff,
  getSeasonNow,
} from "@/actions/anime.action";
import AnimeDetailContent from "@/components/anime-detail-content";
import AnimeDetailHeader from "@/components/anime-detail-header";
import Container from "@/components/container";
import ForYouSection from "@/components/for-you-section";
import HeaderImage from "@/components/header-image";

interface AnimeDetailProps {
  params: {
    id: string;
  };
}

const AnimeDetail = async ({ params: { id } }: AnimeDetailProps) => {
  const [specialForYou, animeDetails, characters, staff, reviews] =
    await Promise.all([
      getSeasonNow({ limit: 25 }),
      getAnimeFullById(+id),
      getAnimeCharacters(+id),
      getAnimeStaff(+id),
      getAnimeReview(+id),
    ]);

  return (
    <main className="min-h-screen">
      <Container>
        <HeaderImage src={animeDetails.images.webp.large_image_url} />
        <AnimeDetailHeader
          imageSrc={animeDetails.images.webp.large_image_url}
          score={animeDetails.score}
          title={animeDetails.title}
        />

        <AnimeDetailContent
          anime={animeDetails}
          characters={characters}
          staff={staff}
          reviews={reviews}
        />

        <ForYouSection collections={specialForYou.data} />
      </Container>
    </main>
  );
};

export default AnimeDetail;
