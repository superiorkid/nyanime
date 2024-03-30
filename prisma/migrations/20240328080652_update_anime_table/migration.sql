/*
  Warnings:

  - A unique constraint covering the columns `[malId]` on the table `Anime` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Anime_malId_key" ON "Anime"("malId");

-- CreateIndex
CREATE INDEX "Anime_title_rating_idx" ON "Anime"("title", "rating");
