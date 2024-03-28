import AnimeCard from "@/components/anime-card";
import { AnimeSearch } from "@/types/AnimeSearch";
import PaginationButton from "@/components/pagination-button";
import { User } from "@prisma/client";

interface AnimeCardsProps {
  collections: AnimeSearch;
  user: User | null;
}

const AnimeCards = ({ collections, user }: AnimeCardsProps) => {
  return (
    <div className="flex-1 space-y-5">
      <div className="grid grid-cols-5 gap-4">
        {collections.data.map((anime, index) => (
          <AnimeCard
            key={index}
            isAuth={!!user}
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
