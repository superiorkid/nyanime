"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Data } from "@/types/AnimeSearch";
import { useDebounce } from "@uidotdev/usehooks";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import SearchResultCard from "./search-result-card";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [searchResults, setSearchResults] = useState<Data[]>();

  useEffect(() => {
    const getAnime = async () => {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?sfw=false&unapproved=false&q=${debouncedSearchTerm}&order_by=popularity&limit=5`
      );

      const { data } = await res.json();

      setSearchResults((_) => data);
    };

    getAnime();
  }, [debouncedSearchTerm]);

  return (
    <>
      <div className="relative w-[172px] lg:w-[354px] h-10 flex flex-col z-50">
        <div className="relative h-10 z-10 rounded-md">
          <Input
            className="absolute inset-0 h-full pl-14 placeholder:text-background bg-transparent focus-visible:ring-0 focus-visible:outline-none text-background border-zinc-400"
            placeholder="Search"
            onChange={(event) => setSearchTerm(event.target.value)}
            value={searchTerm}
          />
          <Button
            className="absolute left-0 inset-y-0 h-full rounded-r-none bg-transparent"
            size="sm"
            variant="secondary"
            disabled
          >
            <Search className="h-5 w-5 stroke-background" />
          </Button>
        </div>
      </div>

      {debouncedSearchTerm && (
        <div className="absolute pt-64 h-[430px] max-w-fit -ml-20 z-30">
          <Card>
            <CardContent className="p-3">
              <div className="flex flex-col space-y-1.5">
                {searchResults?.length ? (
                  searchResults?.map((anime, index) => (
                    <SearchResultCard
                      key={index}
                      imageSrc={anime.images.webp.image_url}
                      malId={anime.mal_id}
                      title={anime.title}
                      year={anime.year}
                      setSearchTerm={setSearchTerm}
                    />
                  ))
                ) : (
                  <div className="flex justify-center items-center">
                    <p className="text-sm font-medium text-rose-500">
                      no result found.
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default SearchBar;
