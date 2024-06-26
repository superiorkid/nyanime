import AnimeCard from "@/components/anime-card";
import PaginationButton from "@/components/pagination-button";
import { AnimeSearch } from "@/types/AnimeSearch";
import { Prisma } from "@prisma/client";

interface AnimeCardsProps {
  collections: AnimeSearch;
  user: Prisma.UserGetPayload<{
    include: {
      animeStatus: { include: { anime: true } };
    };
  }> | null;
}

const AnimeCards = ({ collections, user }: AnimeCardsProps) => {
  return (
    <div className="flex-1 space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {collections.data.map((anime, index) => (
          <AnimeCard
            key={index}
            user={user}
            malId={anime.mal_id}
            title={anime.title}
            releasedYear={anime.year!}
            genre={anime.genres.at(0)?.name!}
            image_url={anime.images.webp.large_image_url}
            score={anime.score}
          />
        ))}
      </div>
      <PaginationButton paginationOptions={collections.pagination} />
    </div>
  );
};

export default AnimeCards;
