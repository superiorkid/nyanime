import {
  getAnimeFullById,
  getAnimePictures,
  getSeasonNow,
} from "@/actions/anime.action";
import AnimeDetailHeader from "@/components/anime-detail-header";
import Container from "@/components/container";
import ForYouSection from "@/components/for-you-section";
import HeaderImage from "@/components/header-image";
import MenuTabs from "@/components/menu-tabs";
import React from "react";

interface AnimeDetailLayoutProps {
  children: Readonly<React.ReactNode>;
  params: {
    id: string;
  };
}

const AnimeDetailLayout = async ({
  children,
  params: { id },
}: AnimeDetailLayoutProps) => {
  const [specialForYou, animeDetails, pictures] = await Promise.all([
    getSeasonNow({ limit: 25 }),
    getAnimeFullById(+id),
    getAnimePictures(+id),
  ]);

  return (
    <main className="min-h-screen">
      <Container>
        <HeaderImage src={pictures.data.at(0)?.webp.large_image_url!} />
        <AnimeDetailHeader
          imageSrc={animeDetails.images.webp.large_image_url}
          score={animeDetails.score}
          title={animeDetails.title}
        />

        <div className="mb-12">
          <MenuTabs />

          {children}
        </div>

        <ForYouSection collections={specialForYou.data} />
      </Container>
    </main>
  );
};

export default AnimeDetailLayout;