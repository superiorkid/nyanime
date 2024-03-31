import { getCurrentUser } from "@/actions/user.action";
import AnimeCard from "@/components/anime-card";
import Container from "@/components/container";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const WatchedPage = async () => {
  const user = await getCurrentUser();

  return (
    <Container>
      {user!.animeStatus.filter((anime) => anime.status === "WATCHED").length >
      0 ? (
        <div className="grid grid-cols-6 gap-4">
          {user?.animeStatus
            .filter((anime) => anime.status === "WATCHED")
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
