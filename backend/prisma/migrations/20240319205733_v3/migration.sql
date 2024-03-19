/*
  Warnings:

  - You are about to drop the column `f_name` on the `Employees` table. All the data in the column will be lost.
  - You are about to drop the column `l_name` on the `Employees` table. All the data in the column will be lost.
  - You are about to drop the column `f_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `l_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employees" DROP COLUMN "f_name",
DROP COLUMN "l_name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "f_name",
DROP COLUMN "l_name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;
