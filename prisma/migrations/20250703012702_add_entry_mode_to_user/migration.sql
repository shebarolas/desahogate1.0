-- CreateEnum
CREATE TYPE "EntryMode" AS ENUM ('PRIVATE', 'PUBLIC', 'BOTH');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "entryMode" "EntryMode" NOT NULL DEFAULT 'PRIVATE';
