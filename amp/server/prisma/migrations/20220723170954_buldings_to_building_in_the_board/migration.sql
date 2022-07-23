/*
  Warnings:

  - You are about to drop the column `buildingsId` on the `BulletinBoard` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[buildingId]` on the table `BulletinBoard` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "BulletinBoard" DROP CONSTRAINT "BulletinBoard_buildingsId_fkey";

-- DropIndex
DROP INDEX "BulletinBoard_buildingsId_key";

-- AlterTable
ALTER TABLE "BulletinBoard" DROP COLUMN "buildingsId",
ADD COLUMN     "buildingId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "BulletinBoard_buildingId_key" ON "BulletinBoard"("buildingId");

-- AddForeignKey
ALTER TABLE "BulletinBoard" ADD CONSTRAINT "BulletinBoard_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE SET NULL ON UPDATE CASCADE;
