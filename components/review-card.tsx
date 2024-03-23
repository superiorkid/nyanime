"use client";

import { Data } from "@/types/Reviews";
import React, { useReducer } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import dayjs from "dayjs";

interface ReviewCardProps {
  review: Data;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const [showMore, showMoreToggle] = useReducer((state) => !state, false);

  const date = dayjs(review.date).format("MMMM, D YYYY");

  return (
    <div className="flex space-x-5">
      <div>
        <div className="relative h-[50px] w-[50px]">
          <Image
            fill
            src={review.user.images.webp.image_url}
            alt={`${review.user.username} Image`}
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex space-x-2">
          <h1 className="font-medium">
            {review.is_spoiler && (
              <Badge className="text-emerald-500">Spoiler</Badge>
            )}
            {review.is_preliminary && (
              <Badge className="text-sky-500">Pre-Liminary</Badge>
            )}
            {review.user.username}
          </h1>
          <span className="text-zinc-500 text-sm">{date}</span>
        </div>

        <p
          className={cn(
            "line-clamp-2 prose prose-sm text-zinc-500",
            showMore && "line-clamp-none"
          )}
        >
          {review.review}
        </p>
        <Button
          variant="ghost"
          className="h-6"
          size="sm"
          onClick={showMoreToggle}
        >
          {showMore ? (
            <>
              show less <ArrowUpRight className="w-3.5 h-3.5 ml-2" />
            </>
          ) : (
            <>
              show more <ArrowDownRight className="w-3.5 h-3.5 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ReviewCard;
