import { getAnimeCharacters, getAnimeFullById } from "@/actions/anime.action";
import CharacterTabsContent from "@/components/character-tabs-content";
import type { Metadata } from "next";

interface CharactersPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: CharactersPageProps): Promise<Metadata> {
  const anime = await getAnimeFullById(+id);

  return {
    title: `Characters - Meet the Cast of ${anime.title} on Nyanime`,
    description: `Get to know the vibrant cast of characters from ${anime.title} on Nyanime's Characters page. Explore character profiles and learn about the talented voice actors behind the roles. Dive deeper into the world of [Anime Name] and connect with your favorite characters.`,
  };
}

const CharactersPage = async ({ params: { id } }: CharactersPageProps) => {
  const characters = await getAnimeCharacters(+id);

  return <CharacterTabsContent characters={characters.data} />;
};

export default CharactersPage;
