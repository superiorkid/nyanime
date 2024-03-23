"use server";

import { Anime } from "@/types/Anime";

interface TopAnimeProps {
  type?:
    | "tv"
    | "movie"
    | "ova"
    | "special"
    | "ona"
    | "music"
    | "cm"
    | "pv"
    | "tv_special";
  filter?: "airing" | "upcoming" | "bypopularity" | "favorite";
  rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  sfw?: boolean;
  page?: number;
  limit?: number;
}

interface GetSeasonNowProps {
  filter?: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  sfw?: boolean;
  unapproved?: boolean;
  page?: number;
  limit?: number;
}

export async function getTopAnime({
  filter = "airing",
  limit = 25,
  page = 1,
  rating = "g",
  sfw = false,
  type = "tv",
}: TopAnimeProps) {
  try {
    const res = await fetch(
      process.env.JIKAN_BASE_URL +
        `/top/anime?type=${type}&filter=${filter}&rating=${rating}&sfw=${sfw}&page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 43200 },
      }
    );

    const data = await res.json();

    if (res.status !== 200) {
      throw new Error(data);
    }

    return data as Anime;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get anime recommendation");
  }
}

export async function getSeasonNow({
  filter = "tv",
  limit = 20,
  page = 1,
  sfw = false,
  unapproved = false,
}: GetSeasonNowProps) {
  try {
    const res = await fetch(
      process.env.JIKAN_BASE_URL +
        `/seasons/now?filter=${filter}&limit=${limit}&page=${page}&sfw=${sfw}&unapproved=${unapproved}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 43200 },
      }
    );

    const data = await res.json();

    if (res.status !== 200) {
      throw new Error(data);
    }

    return data as Anime;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get anime recommendation");
  }
}

export async function getRecentAnimeRecommendation() {}
