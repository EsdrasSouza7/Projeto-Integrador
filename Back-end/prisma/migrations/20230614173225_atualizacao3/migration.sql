/*
  Warnings:

  - You are about to drop the column `respostaUsuarioId` on the `Perguntas` table. All the data in the column will be lost.
  - You are about to drop the column `respostaUsuarioId` on the `Respostas` table. All the data in the column will be lost.
  - You are about to drop the column `RespostaUsuarioId` on the `Usuario` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Perguntas" DROP CONSTRAINT "Perguntas_respostaUsuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Respostas" DROP CONSTRAINT "Respostas_respostaUsuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_RespostaUsuarioId_fkey";

-- AlterTable
ALTER TABLE "Perguntas" DROP COLUMN "respostaUsuarioId";

-- AlterTable
ALTER TABLE "RespostaUsuario" ADD COLUMN     "perguntasId" INTEGER,
ADD COLUMN     "respostasId" INTEGER,
ADD COLUMN     "usuarioId" INTEGER;

-- AlterTable
ALTER TABLE "Respostas" DROP COLUMN "respostaUsuarioId";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "RespostaUsuarioId";

-- AddForeignKey
ALTER TABLE "RespostaUsuario" ADD CONSTRAINT "RespostaUsuario_usuarioId_fkey" 
FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespostaUsuario" ADD CONSTRAINT "RespostaUsuario_respostasId_fkey" 
FOREIGN KEY ("respostasId") REFERENCES "Respostas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespostaUsuario" ADD CONSTRAINT "RespostaUsuario_perguntasId_fkey" 
FOREIGN KEY ("perguntasId") REFERENCES "Perguntas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
