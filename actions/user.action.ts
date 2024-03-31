"use server";

import { getSession } from "@/actions/authentication.action";
import prisma from "@/lib/prisma";
import { EditUser } from "@/lib/schemas/edit-user.schema";
import { AnimeStatus } from "@prisma/client";
import jwt from "jsonwebtoken";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  try {
    const session = await getSession();

    const user = await prisma.user.findFirst({
      where: {
        username: session?.username,
      },
      include: {
        animeStatus: { include: { anime: true } }
      }
    });

    if (!user) return null;

    return user;
  } catch (error) {
    return null;
  }
}

export async function editUser(values: EditUser) {
  try {
    const user = await getCurrentUser();

    if (!user) throw new Error("user not found");

    const editUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        email: values.email,
        username: values.username,
      },
    });

    if (values.username) {
      cookies().delete("token");

      const oneDay = 24 * 60 * 60 * 1000;
      const newToken = jwt.sign(
        { sub: user.id, username: values.username },
        process.env.SECRET_KEY as string,
        { expiresIn: oneDay }
      );
      cookies().set("token", newToken, { secure: true, maxAge: oneDay });
    }

    revalidateTag("user");

    return {
      message: "Update user successfully",
      data: {
        email: editUser.email,
        username: editUser.username,
      },
    };
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}

export async function addUserAnimeStatus({
  genre,
  imageUrl,
  malId,
  releasedYear,
  score,
  title,
  status
}: {
  genre: string;
  imageUrl: string;
  malId: number;
  releasedYear: number;
  score: number;
  title: string;
  status: AnimeStatus
}) {
  try {
    const currentUser = await getCurrentUser()

    let anime = await prisma.anime.findFirst({
      where: {
        malId: String(malId)
      }
    })

    if (!anime) {
      anime = await prisma.anime.create({
        data: {
          malId: String(malId),
          title,
          images: imageUrl,
          releaseYear: String(releasedYear),
          genre,
          rating: String(score)
        }
      })
    }

    const animeStatus = await prisma.userAnimeStatus.findFirst({
      where: {
        userId: currentUser?.id,
        animeId: anime.id
      }
    })

    if (!animeStatus) {
      await prisma.userAnimeStatus.create({
        data: {
          status,
          userId: currentUser!.id,
          animeId: anime.id
        }
      })
    }

    if (status !== animeStatus?.status) {
      await prisma.userAnimeStatus.update({
        where: {
          userId_animeId: { animeId: anime.id, userId: currentUser!.id }
        },
        data: {
          status
        }
      })
    } else {
      await prisma.userAnimeStatus.delete({
        where: {
          userId_animeId: { animeId: anime.id, userId: currentUser!.id }
        }
      })
    }

    return {
      message: `Remove anime from ${status} list successfully`
    }
  } catch (error) {
    console.error((error as Error).message);
    throw new Error((error as Error).message);
  }
}
