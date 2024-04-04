"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { SetStateAction } from "react";

interface SearchResultCardProps {
  malId: number;
  imageSrc: string;
  title: string;
  year: number;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
}

const SearchResultCard = ({
  imageSrc,
  malId,
  setSearchTerm,
  title,
  year,
}: SearchResultCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={(event) => {
        event.preventDefault();
        setSearchTerm((_) => "");
        router.push(`/anime/${malId}`);
      }}
      className="justify-start space-x-2 p-0 w-full hover:cursor-pointer z-50"
    >
      <div className="flex space-x-2 items-center p-1.5 hover:bg-zinc-200/50 rounded-md w-full">
        <div className="relative h-8 w-8">
          <Image
            fill
            src={imageSrc}
            alt={`${title} Image`}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex-1 justify-between items-center text-sm font-medium flex">
          <p className="flex-1 line-clamp-2">{title}</p>
          <p className="text-zinc-500 w-10 text-right">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
