/*
  Warnings:

  - You are about to drop the column `perguntasId` on the `Evento` table. All the data in the column will be lost.
  - You are about to drop the column `eventoId` on the `Organizador` table. All the data in the column will be lost.
  - You are about to drop the column `respostasId` on the `Perguntas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_perguntasId_fkey";

-- DropForeignKey
ALTER TABLE "Organizador" DROP CONSTRAINT "Organizador_eventoId_fkey";

-- DropForeignKey
ALTER TABLE "Perguntas" DROP CONSTRAINT "Perguntas_respostasId_fkey";

-- AlterTable
ALTER TABLE "Evento" DROP COLUMN "perguntasId",
ADD COLUMN     "Organizador_Email" TEXT;

-- AlterTable
ALTER TABLE "Organizador" DROP COLUMN "eventoId";

-- AlterTable
ALTER TABLE "Perguntas" DROP COLUMN "respostasId",
ADD COLUMN     "eventoId" INTEGER;

-- AlterTable
ALTER TABLE "Respostas" ADD COLUMN     "perguntasId" INTEGER;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_Organizador_Email_fkey" FOREIGN KEY ("Organizador_Email") REFERENCES "Organizador"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perguntas" ADD CONSTRAINT "Perguntas_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_perguntasId_fkey" FOREIGN KEY ("perguntasId") REFERENCES "Perguntas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
