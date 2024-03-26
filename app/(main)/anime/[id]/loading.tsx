import Container from "@/components/container";
import { Loader, Loader2 } from "lucide-react";
import React from "react";

const AnimeDetailLoading = () => {
  return (
    <div className="h-[18dvh]">
      <div className="max-w-xl justify-center flex h-full items-center">
        <div className="items-center flex flex-col space-y-2.5">
          <Loader2 className="w-8 h-8 animate-spin" />
          <p className="text-zinc-400 font-medium text-sm">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailLoading;
