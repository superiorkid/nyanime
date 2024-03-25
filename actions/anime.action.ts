"use server";

import { Anime, Data } from "@/types/Anime";
import { AnimeSearch } from "@/types/AnimeSearch";
import { Characters } from "@/types/Character";
import { Genre } from "@/types/Genre";
import { Picture } from "@/types/Picture";
import { Producer } from "@/types/Producer";
import { Reviews } from "@/types/Reviews";
import { Staff } from "@/types/Staff";
import { ORDER_BY, RATING, SORT_BY, STATUS, TYPE } from "@/types/enums";

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
  type?: TYPE;
  score?: number;
  min_score?: number;
  max_score?: number;
  status?: STATUS;
  rating?: RATING;
  genres?: string;
  genres_exclude?: string;
  order_by?: ORDER_BY;
  sort_by?: SORT_BY;
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
    const searchParams = new URLSearchParams({
      type: type || "",
      status: status || "",
      start_date: start_date || "",
      sort_by: sort_by || "",
      score: score !== undefined ? score.toString() : "",
      rating: rating || "",
      q: q || "",
      producers: producers || "",
      page: page !== undefined ? page.toString() : "",
      order_by: order_by || "",
      min_score: min_score !== undefined ? min_score.toString() : "",
      max_score: max_score !== undefined ? max_score.toString() : "",
      limit: limit !== undefined ? limit.toString() : "",
      letter: letter || "",
      genres_exclude: genres_exclude || "",
      genres: genres || "",
      end_date: end_date || "",
    });

    searchParams.forEach((value, key) => {
      if (value === "") {
        searchParams.delete(key);
      }
    });

    const res = await fetch(
      process.env.JIKAN_BASE_URL +
        `/anime?` +
        searchParams.toString() +
        `&unapproved=${unapproved}&sfw=${sfw}`,
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

export async function getGenres() {
  const ONE_MONTH = 2592000;

  try {
    const res = await fetch(process.env.JIKAN_BASE_URL + `/genres/anime`, {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: ONE_MONTH },
    });

    const data = await res.json();

    if (res.status !== 200) {
      throw new Error(data);
    }

    return data as Genre;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get genres");
  }
}

export async function getStudio() {
  try {
    const res = await fetch(process.env.JIKAN_BASE_URL + `/producers`, {
      method: "GET",
      headers: { Accept: "application/json" },
      next: { revalidate: 43200 },
    });

    const data = await res.json();

    if (res.status !== 200) {
      throw new Error(data);
    }

    return data as Producer;
  } catch (error) {
    console.error(error);
    throw new Error("something went wrong. Failed to get studio");
  }
}
