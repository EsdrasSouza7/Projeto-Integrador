/*
  Warnings:

  - You are about to drop the column `perguntasId` on the `RespostaUsuario` table. All the data in the column will be lost.
  - You are about to drop the column `respostasId` on the `RespostaUsuario` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `RespostaUsuario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "RespostaUsuario" DROP CONSTRAINT "RespostaUsuario_perguntasId_fkey";

-- DropForeignKey
ALTER TABLE "RespostaUsuario" DROP CONSTRAINT "RespostaUsuario_respostasId_fkey";

-- DropForeignKey
ALTER TABLE "RespostaUsuario" DROP CONSTRAINT "RespostaUsuario_usuarioId_fkey";

-- AlterTable
ALTER TABLE "RespostaUsuario" DROP COLUMN "perguntasId",
DROP COLUMN "respostasId",
DROP COLUMN "usuarioId",
ADD COLUMN     "Perguntas_id" INTEGER,
ADD COLUMN     "Respostas_id" INTEGER,
ADD COLUMN     "Usuario_id" INTEGER;

-- AddForeignKey
ALTER TABLE "RespostaUsuario" ADD CONSTRAINT "RespostaUsuario_Usuario_id_fkey" FOREIGN KEY ("Usuario_id") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespostaUsuario" ADD CONSTRAINT "RespostaUsuario_Respostas_id_fkey" FOREIGN KEY ("Respostas_id") REFERENCES "Respostas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespostaUsuario" ADD CONSTRAINT "RespostaUsuario_Perguntas_id_fkey" FOREIGN KEY ("Perguntas_id") REFERENCES "Perguntas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
