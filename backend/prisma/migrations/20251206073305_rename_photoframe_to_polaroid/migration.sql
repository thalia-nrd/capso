/*
  Warnings:

  - You are about to drop the `PhotoFrame` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PhotoFrame" DROP CONSTRAINT "PhotoFrame_frameId_fkey";

-- DropTable
DROP TABLE "PhotoFrame";

-- CreateTable
CREATE TABLE "Polaroid" (
    "id" SERIAL NOT NULL,
    "position" JSONB,
    "url" TEXT NOT NULL,
    "caption" TEXT,
    "frameId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Polaroid_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Polaroid" ADD CONSTRAINT "Polaroid_frameId_fkey" FOREIGN KEY ("frameId") REFERENCES "Frame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
