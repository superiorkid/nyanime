"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  loading: () => <div className="w-[1200px] h-[700px] animate-pulse" />,
});

interface WatchTrailerButtonProps {
  url: string;
}

const WatchTrailerButton = ({ url }: WatchTrailerButtonProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="absolute lg:right-20 right-5 bottom-5 z-10 font-medium"
          size="lg"
          variant="secondary"
        >
          <PlayCircle className="size-6 mr-2" />
          Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-auto min-w-fit p-0 border-none aspect-video">
        <ReactPlayer url={url} controls />
      </DialogContent>
    </Dialog>
  );
};

export default WatchTrailerButton;
