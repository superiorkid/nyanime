import {
  getAnimeFullById,
  getAnimePictures,
  getSeasonNow,
} from "@/actions/anime.action";
import { getCurrentUser } from "@/actions/user.action";
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
  const [specialForYou, animeDetails, pictures, user] = await Promise.all([
    getSeasonNow({ limit: 25 }),
    getAnimeFullById(+id),
    getAnimePictures(+id),
    getCurrentUser(),
  ]);

  return (
    <main className="min-h-screen -z-40">
      <Container>
        <HeaderImage
          src={pictures.data.at(0)?.webp.large_image_url!}
          trailerUrl={animeDetails.trailer.url!}
        />
        <AnimeDetailHeader
          imageSrc={animeDetails.images.webp.large_image_url}
          score={animeDetails.score}
          title={animeDetails.title}
        />

        <div className="mb-12">
          <MenuTabs />

          {children}
        </div>

        <ForYouSection collections={specialForYou.data} user={user} />
      </Container>
    </main>
  );
};

export default AnimeDetailLayout;
