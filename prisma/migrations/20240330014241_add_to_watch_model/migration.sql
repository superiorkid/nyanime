-- CreateTable
CREATE TABLE "ToWatch" (
    "userId" TEXT NOT NULL,
    "animeId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToWatch_pkey" PRIMARY KEY ("userId","animeId")
);

-- AddForeignKey
ALTER TABLE "ToWatch" ADD CONSTRAINT "ToWatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToWatch" ADD CONSTRAINT "ToWatch_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
