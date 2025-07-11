-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('diary', 'community');

-- CreateEnum
CREATE TYPE "Mood" AS ENUM ('tristeza', 'alegria', 'ansiedad', 'rabia', 'calma', 'otro');

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "mood" "Mood",
    "type" "PostType" NOT NULL,
    "isAnonymus" BOOLEAN NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
