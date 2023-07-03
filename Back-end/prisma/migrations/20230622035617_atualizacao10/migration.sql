/*
  Warnings:

  - You are about to drop the column `Organizador_Email` on the `Evento` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_Organizador_Email_fkey";

-- AlterTable
ALTER TABLE "Evento" DROP COLUMN "Organizador_Email";
