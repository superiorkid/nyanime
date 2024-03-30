import { getCurrentUser } from "@/actions/user.action";
import AnimeCard from "@/components/anime-card";
import Container from "@/components/container";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import React from "react";

const ToWatchpage = async () => {
  const user = await getCurrentUser();

  return (
    <Container>
      {user!.watchings.length > 0 ? (
        <div className="grid grid-cols-6 gap-4">
          {user?.toWatch.map(({ anime }, index) => (
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
