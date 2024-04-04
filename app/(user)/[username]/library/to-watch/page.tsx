import { getCurrentUser } from "@/actions/user.action";
import AnimeCard from "@/components/anime-card";
import Container from "@/components/container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "To Watch List - Nyanime",
  description:
    "Plan your anime-watching journey with Nyanime's 'To Watch' list. Discover upcoming titles, add them to your list, and never run out of new anime to explore. Whether you're seeking action-packed adventures or heartwarming stories, Nyanime has something for every anime enthusiast. Start building your ultimate to-watch list today!",
};

interface ToWatchpageProps {
  searchParams: {
    sort?: string;
  };
}

const ToWatchpage = async ({ searchParams: { sort } }: ToWatchpageProps) => {
  const user = await getCurrentUser();

  return (
    <Container>
      {user!.animeStatus.filter((anime) => anime.status === "TO_WATCH").length >
      0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {user?.animeStatus
            .filter((anime) => anime.status === "TO_WATCH")
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
          <AlertDescription>To Watch list is empty</AlertDescription>
        </Alert>
      )}
    </Container>
  );
};

export default ToWatchpage;
