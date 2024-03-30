-- DropForeignKey
ALTER TABLE "ToWatch" DROP CONSTRAINT "ToWatch_userId_fkey";

-- DropForeignKey
ALTER TABLE "Watching" DROP CONSTRAINT "Watching_userId_fkey";

-- AddForeignKey
ALTER TABLE "Watching" ADD CONSTRAINT "Watching_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToWatch" ADD CONSTRAINT "ToWatch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
