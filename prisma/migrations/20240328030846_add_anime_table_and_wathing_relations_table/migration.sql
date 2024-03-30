-- CreateTable
CREATE TABLE "Anime" (
    "id" TEXT NOT NULL,
    "malId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "releaseYear" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "rating" TEXT NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watching" (
    "userId" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Watching_pkey" PRIMARY KEY ("userId","animeId")
);

-- AddForeignKey
ALTER TABLE "Watching" ADD CONSTRAINT "Watching_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watching" ADD CONSTRAINT "Watching_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
