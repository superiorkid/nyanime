import { getAnimeSearch, getGenres, getStudio } from "@/actions/anime.action";
import AnimeCards from "@/components/anime-cards";
import AnimeSort from "@/components/anime-sort";
import Container from "@/components/container";
import SidebarFilter from "@/components/sidebar-filter";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ORDER_BY, SORT_BY } from "@/types/enums";
import { Terminal } from "lucide-react";

interface CatalogPageProps {
  searchParams: {
    sort?: string;
    year?: string;
    genres?: string | string[];
    producers?: string | string[];
  };
}

const CatalogPage = async ({
  searchParams: { sort, year, genres: genre, producers },
}: CatalogPageProps) => {
  const sortSplit = sort?.split("-");

  const [collections, genres, studios] = await Promise.all([
    getAnimeSearch({
      order_by:
        Array.isArray(sortSplit) &&
        sortSplit.length === 2 &&
        Object.values(ORDER_BY).includes(sortSplit[0] as ORDER_BY)
          ? (sortSplit.at(0) as ORDER_BY)
          : undefined,
      sort_by:
        Array.isArray(sortSplit) &&
        sortSplit.length === 2 &&
        Object.values(SORT_BY).includes(sortSplit[1] as SORT_BY)
          ? (sortSplit.at(1) as SORT_BY)
          : undefined,
      start_date:
        year?.match(/^-?\d+$/) && year?.length === 4
          ? year + "-01-01"
          : undefined,
      end_date:
        year?.match(/^-?\d+$/) && year?.length === 4
          ? year + "-12-31"
          : undefined,
      genres: Array.isArray(genre) ? genre.join(",") : genre,
      producers: Array.isArray(producers) ? producers.join(",") : producers,
    }),
    getGenres(),
    getStudio(),
  ]);

  return (
    <div className="min-h-screen mt-8 mb-16">
      <Container>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Catalog</h1>
          <AnimeSort />
        </div>
        <div className="flex space-x-9">
          <SidebarFilter genres={genres.data} producers={studios.data} />
          {collections.data.length < 1 ? (
            <div className="w-full">
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertDescription>Anime is Empty!</AlertDescription>
              </Alert>
            </div>
          ) : (
            <AnimeCards collections={collections.data} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default CatalogPage;
