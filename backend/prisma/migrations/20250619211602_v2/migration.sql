/*
  Warnings:

  - The values [Admin,Creator] on the enum `Roles` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `note` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Position` table. All the data in the column will be lost.
  - You are about to drop the `Employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EmployeesToNote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notesEmployees` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `object` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `result` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `site` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `areaId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Roles_new" AS ENUM ('ADMIN', 'CREATOR', 'EMPLOYEE');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Roles_new" USING ("role"::text::"Roles_new");
ALTER TYPE "Roles" RENAME TO "Roles_old";
ALTER TYPE "Roles_new" RENAME TO "Roles";
DROP TYPE "Roles_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Employees" DROP CONSTRAINT "Employees_areaId_fkey";

-- DropForeignKey
ALTER TABLE "Employees" DROP CONSTRAINT "Employees_positionId_fkey";

-- DropForeignKey
ALTER TABLE "Position" DROP CONSTRAINT "Position_userId_fkey";

-- DropForeignKey
ALTER TABLE "_EmployeesToNote" DROP CONSTRAINT "_EmployeesToNote_A_fkey";

-- DropForeignKey
ALTER TABLE "_EmployeesToNote" DROP CONSTRAINT "_EmployeesToNote_B_fkey";

-- DropForeignKey
ALTER TABLE "notesEmployees" DROP CONSTRAINT "notesEmployees_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "notesEmployees" DROP CONSTRAINT "notesEmployees_noteId_fkey";

-- DropIndex
DROP INDEX "Position_userId_key";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "note",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "object" TEXT NOT NULL,
ADD COLUMN     "result" TEXT NOT NULL,
ADD COLUMN     "site" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Position" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "areaId" INTEGER NOT NULL,
ADD COLUMN     "positionId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Employees";

-- DropTable
DROP TABLE "_EmployeesToNote";

-- DropTable
DROP TABLE "notesEmployees";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
