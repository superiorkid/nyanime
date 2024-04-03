import { getCurrentUser } from "@/actions/user.action";
import AnimeCard from "@/components/anime-card";
import Container from "@/components/container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Watched List - Nyanime",
  description:
    "Celebrate your anime-watching achievements with Nyanime's 'Watched' list. Reflect on the memorable journeys you've experienced with your favorite anime titles. From epic battles to heartrending dramas, relive the moments that touched your heart and inspired your imagination. Join the Nyanime community and share your watched list with fellow anime lovers!",
};

interface WatchedPageProps {
  searchParams: {
    sort?: string;
  };
}

const WatchedPage = async ({ searchParams: { sort } }: WatchedPageProps) => {
  const user = await getCurrentUser();

  return (
    <Container>
      {user!.animeStatus.filter((anime) => anime.status === "WATCHED").length >
      0 ? (
        <div className="grid grid-cols-6 gap-4">
          {user?.animeStatus
            .filter((anime) => anime.status === "WATCHED")
            .sort((a, b) => {
              switch (sort) {
                case "name-asc":
                  return a.anime.title > b.anime.title ? 1 : -1;
                case "name-desc":
                  return b.anime.title > a.anime.title ? 1 : -1;
                case "year-asc":
                  return new Date(a.anime.releaseYear) > new Date(b.anime.title)
                    ? -1
                    : 1;
                case "year-desc":
                  return new Date(b.anime.releaseYear) > new Date(a.anime.title)
                    ? 1
                    : -1;
                default:
                  return 0;
              }
            })
            .map(({ anime }, index) => (
              <AnimeCard
                key={index}
                genre={anime.genre}
                image_url={anime.images}
                malId={Number(anime.malId)}
                releasedYear={Number(anime.releaseYear)}
                title={anime.title}
                score={Number(anime.rating)}
                user={user}
              />
            ))}
        </div>
      ) : (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Anime is empty</AlertTitle>
          <AlertDescription>Watched list is empty</AlertDescription>
        </Alert>
      )}
    </Container>
  );
};

export default WatchedPage;
