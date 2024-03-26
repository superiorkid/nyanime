import { getAnimeCharacters } from "@/actions/anime.action";
import CharacterTabsContent from "@/components/character-tabs-content";

interface CharactersPageProps {
  params: {
    id: string;
  };
}

const CharactersPage = async ({ params: { id } }: CharactersPageProps) => {
  const characters = await getAnimeCharacters(+id);

  return <CharacterTabsContent characters={characters.data} />;
};

export default CharactersPage;
