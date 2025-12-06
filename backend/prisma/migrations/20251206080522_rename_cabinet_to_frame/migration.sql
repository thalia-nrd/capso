/*
  Warnings:

  - You are about to drop the column `cabinetId` on the `CabinetLayout` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `Checklist` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `Chest` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `DecorItem` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `Journal` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `Media` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `cabinetId` on the `Polaroid` table. All the data in the column will be lost.
  - You are about to drop the `Cabinet` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[frameId]` on the table `CabinetLayout` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[frameId]` on the table `Chest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[frameId]` on the table `Journal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `frameId` to the `CabinetLayout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frameId` to the `Checklist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frameId` to the `Chest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frameId` to the `DecorItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frameId` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frameId` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frameId` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frameId` to the `Polaroid` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cabinet" DROP CONSTRAINT "Cabinet_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "CabinetLayout" DROP CONSTRAINT "CabinetLayout_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "Checklist" DROP CONSTRAINT "Checklist_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "Chest" DROP CONSTRAINT "Chest_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "DecorItem" DROP CONSTRAINT "DecorItem_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "Journal" DROP CONSTRAINT "Journal_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_cabinetId_fkey";

-- DropForeignKey
ALTER TABLE "Polaroid" DROP CONSTRAINT "Polaroid_cabinetId_fkey";

-- DropIndex
DROP INDEX "CabinetLayout_cabinetId_key";

-- DropIndex
DROP INDEX "Chest_cabinetId_key";

-- DropIndex
DROP INDEX "Journal_cabinetId_key";

-- AlterTable
ALTER TABLE "CabinetLayout" DROP COLUMN "cabinetId",
ADD COLUMN     "frameId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Checklist" DROP COLUMN "cabinetId",
ADD COLUMN     "frameId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Chest" DROP COLUMN "cabinetId",
ADD COLUMN     "frameId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "DecorItem" DROP COLUMN "cabinetId",
ADD COLUMN     "frameId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Journal" DROP COLUMN "cabinetId",
ADD COLUMN     "frameId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Media" DROP COLUMN "cabinetId",
ADD COLUMN     "frameId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "cabinetId",
ADD COLUMN     "frameId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Polaroid" DROP COLUMN "cabinetId",
ADD COLUMN     "frameId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Cabinet";

-- CreateTable
CREATE TABLE "Frame" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Frame_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Frame_ownerId_key" ON "Frame"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "CabinetLayout_frameId_key" ON "CabinetLayout"("frameId");

-- CreateIndex
CREATE UNIQUE INDEX "Chest_frameId_key" ON "Chest"("frameId");

-- CreateIndex
CREATE UNIQUE INDEX "Journal_frameId_key" ON "Journal"("frameId");

-- AddForeignKey
ALTER TABLE "Frame" ADD CONSTRAINT "Frame_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CabinetLayout" ADD CONSTRAINT "CabinetLayout_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chest" ADD CONSTRAINT "Chest_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal" ADD CONSTRAINT "Journal_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Polaroid" ADD CONSTRAINT "Polaroid_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Checklist" ADD CONSTRAINT "Checklist_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DecorItem" ADD CONSTRAINT "DecorItem_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
