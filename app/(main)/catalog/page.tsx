import { getAnimeSearch, getGenres, getStudio } from "@/actions/anime.action";
import { getCurrentUser } from "@/actions/user.action";
import AnimeCards from "@/components/anime-cards";
import AnimeSort from "@/components/anime-sort";
import Container from "@/components/container";
import SidebarFilter from "@/components/sidebar-filter";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ORDER_BY, SORT_BY, STATUS, TYPE } from "@/types/enums";
import { Settings2, Terminal } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import MobileSidebarFilter from "@/components/mobile-sidebar-filter";

export const metadata: Metadata = {
  title: "Nyanime Catalog - Explore a Universe of Anime Titles",
  description:
    "Discover a universe of anime wonders in the Nyanime Catalog. Browse through our extensive list of anime titles, sorted by year, genre, studio, format, and airing status. Filter your search to find exactly what you're looking for and explore new favorites. Whether you're into action, romance, fantasy, or slice of life, Nyanime has something for everyone. Start exploring now and find your next obsession!",
};

interface CatalogPageProps {
  searchParams: {
    page?: string;
    sort?: string;
    year?: string;
    genres?: string | string[];
    producers?: string | string[];
    status?: string;
    type?: string;
  };
}

const CatalogPage = async ({
  searchParams: { sort, year, genres: genre, producers, status, type, page },
}: CatalogPageProps) => {
  const sortSplit = sort?.split("-");

  // const memoizeDateRange = useMemo(() => {
  //   return getDateRange({ season, year });
  // }, [season, year]);

  const [collections, genres, studios, user] = await Promise.all([
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
        year && year.length === 4 && year.match(/^-?\d+$/)
          ? year + "-01-01"
          : undefined,
      end_date:
        year && year.length === 4 && year.match(/^-?\d+$/)
          ? year + "-12-31"
          : undefined,
      genres: Array.isArray(genre) ? genre.join(",") : genre,
      producers: Array.isArray(producers) ? producers.join(",") : producers,
      status: Object.values(STATUS).includes(status as STATUS)
        ? (status as STATUS)
        : undefined,
      type: Object.values(TYPE).includes(type as TYPE)
        ? (type as TYPE)
        : undefined,
      page: Number(page) || undefined,
    }),
    getGenres(),
    getStudio(),
    getCurrentUser(),
  ]);

  return (
    <div className="min-h-screen mt-8 mb-16">
      <Container>
        <div className="lg:hidden mb-3.5">
          <MobileSidebarFilter genres={genres.data} producers={studios.data} />
        </div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl md:text-3xl font-bold">Catalog</h1>
          <AnimeSort />
        </div>
        <div className="flex lg:space-x-9">
          <div className="hidden lg:block">
            <SidebarFilter genres={genres.data} producers={studios.data} />
          </div>
          {collections.data.length < 1 ? (
            <div className="w-full">
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertDescription>Anime is Empty!</AlertDescription>
              </Alert>
            </div>
          ) : (
            <AnimeCards collections={collections} user={user} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default CatalogPage;
