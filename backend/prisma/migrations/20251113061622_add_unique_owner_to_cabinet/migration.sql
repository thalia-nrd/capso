/*
  Warnings:

  - A unique constraint covering the columns `[ownerId]` on the table `Cabinet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `Cabinet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cabinet" ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Cabinet_ownerId_key" ON "Cabinet"("ownerId");
