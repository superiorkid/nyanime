/*
  Warnings:

  - You are about to drop the `ToWatch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Watched` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Watching` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "AnimeStatus" AS ENUM ('WATCHING', 'TO_WATCH', 'WATCHED');

-- DropForeignKey
ALTER TABLE "ToWatch" DROP CONSTRAINT "ToWatch_animeId_fkey";

-- DropForeignKey
ALTER TABLE "ToWatch" DROP CONSTRAINT "ToWatch_userId_fkey";

-- DropForeignKey
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_animeId_fkey";

-- DropForeignKey
ALTER TABLE "Watched" DROP CONSTRAINT "Watched_userId_fkey";

-- DropForeignKey
ALTER TABLE "Watching" DROP CONSTRAINT "Watching_animeId_fkey";

-- DropForeignKey
ALTER TABLE "Watching" DROP CONSTRAINT "Watching_userId_fkey";

-- DropTable
DROP TABLE "ToWatch";

-- DropTable
DROP TABLE "Watched";

-- DropTable
DROP TABLE "Watching";

-- CreateTable
CREATE TABLE "UserAnimeStatus" (
    "userId" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "status" "AnimeStatus" NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAnimeStatus_pkey" PRIMARY KEY ("userId","animeId")
);

-- AddForeignKey
ALTER TABLE "UserAnimeStatus" ADD CONSTRAINT "UserAnimeStatus_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnimeStatus" ADD CONSTRAINT "UserAnimeStatus_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
