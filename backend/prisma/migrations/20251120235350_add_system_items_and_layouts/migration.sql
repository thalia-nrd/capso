/*
  Warnings:

  - You are about to drop the `DecorItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DecorItem" DROP CONSTRAINT "DecorItem_cabinetId_fkey";

-- DropIndex
DROP INDEX "CabinetLayout_cabinetId_key";

-- AlterTable
ALTER TABLE "CabinetLayout" ADD COLUMN     "name" TEXT;

-- DropTable
DROP TABLE "DecorItem";

-- CreateTable
CREATE TABLE "SystemItem" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SystemItem_pkey" PRIMARY KEY ("id")
);
