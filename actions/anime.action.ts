"use server";

import { Anime, Data } from "@/types/Anime";
import { AnimeSearch } from "@/types/AnimeSearch";
import { Characters } from "@/types/Character";
import { Picture } from "@/types/Picture";
import { Reviews } from "@/types/Reviews";
import { Staff } from "@/types/Staff";

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
    throw new Error("something went wrong. Failed to get top anime");
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

export async function getAnimeFullById(malId: number) {
  try {
    const res = await fetch(
      process.env.JIKAN_BASE_URL + `/anime/${malId}/full`,
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

    return data.data as Data;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get full anime by id");
  }
}

export async function getAnimeCharacters(malId: number) {
  try {
    const res = await fetch(
      process.env.JIKAN_BASE_URL + `/anime/${malId}/characters`,
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

    return data as Characters;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get anime characters");
  }
}

export async function getAnimeStaff(malId: number) {
  try {
    const res = await fetch(
      process.env.JIKAN_BASE_URL + `/anime/${malId}/staff`,
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

    return data as Staff;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get anime staff");
  }
}

export async function getAnimeReview(malId: number) {
  try {
    const res = await fetch(
      process.env.JIKAN_BASE_URL + `/anime/${malId}/reviews`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
        next: { revalidate: 43200 },
      }
    );

    const data = await res.json();

    if (res.status !== 200) {
      5;
      throw new Error(data);
    }

    return data as Reviews;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get anime reviews");
  }
}

export async function getAnimePictures(malId: number) {
  try {
    const res = await fetch(
      process.env.JIKAN_BASE_URL + `/anime/${malId}/pictures`,
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

    return data as Picture;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get anime reviews");
  }
}

interface getAnimeSearchProps {
  sfw?: boolean;
  unapproved?: boolean;
  page?: number;
  limit?: number;
  q?: string;
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
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: "airing" | "complete" | "upcoming";
  rating?: "g" | "pg" | "pg13" | "r17" | "r" | "rx";
  genres?: string;
  genres_exclude?: string;
  order_by?:
    | "mal_id"
    | "title"
    | "start_date"
    | "end_date"
    | "episodes"
    | "score"
    | "scored_by"
    | "rank"
    | "popularity"
    | "members"
    | "favorites";
  sort_by?: "desc" | "asc";
  letter?: string;
  producers?: string;
  start_date?: string;
  end_date?: string;
}

export async function getAnimeSearch({
  end_date,
  genres,
  genres_exclude,
  letter,
  limit,
  max_score,
  min_score,
  order_by,
  page,
  producers,
  q,
  rating,
  score,
  sfw = false,
  sort_by,
  start_date,
  status,
  type,
  unapproved = false,
}: getAnimeSearchProps) {
  try {
    const res = await fetch(
      process.env.JIKAN_BASE_URL +
        `/anime?sfw=${sfw}&unapproved=${unapproved}&type=${type}&status=${status}&start_date=${start_date}&sort_by=${sort_by}&score=${score}&rating=${rating}&q=${q}&producers=${producers}&page=${page}&order_by=${order_by}&min_score=${min_score}&max_score=${max_score}&limit=${limit}&letter=${letter}&genres_exclude=${genres_exclude}&genres=${genres}&end_date=${end_date}`,
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

    return data as AnimeSearch;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get anime search");
  }
}
