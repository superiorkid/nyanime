import { getCurrentUser } from "@/actions/user.action";
import AnimeCard from "@/components/anime-card";
import Container from "@/components/container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currently Watching - Nyanime",
  description:
    "Keep track of your currently watched anime on Nyanime. Stay updated on your progress and never miss a moment of your favorite shows. Organize your anime-watching experience effortlessly with Nyanime's user-friendly interface. Dive into your watching list and embark on exciting adventures with your favorite characters!",
};

interface WatchingPageProps {
  searchParams: {
    sort?: string;
  };
}

const WatchingPage = async ({ searchParams: { sort } }: WatchingPageProps) => {
  const user = await getCurrentUser();

  return (
    <Container>
      {user!.animeStatus.filter((anime) => anime.status === "WATCHING").length >
      0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {user?.animeStatus
            .filter((anime) => anime.status === "WATCHING")
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
          <AlertDescription>Watching list is empty</AlertDescription>
        </Alert>
      )}
    </Container>
  );
};

export default WatchingPage;
