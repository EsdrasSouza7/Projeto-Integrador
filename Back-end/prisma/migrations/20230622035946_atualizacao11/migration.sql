/*
  Warnings:

  - You are about to drop the `Evento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Organizador` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Perguntas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RespostaUsuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Respostas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Perguntas" DROP CONSTRAINT "Perguntas_eventoId_fkey";

-- DropForeignKey
ALTER TABLE "RespostaUsuario" DROP CONSTRAINT "RespostaUsuario_Perguntas_id_fkey";

-- DropForeignKey
ALTER TABLE "RespostaUsuario" DROP CONSTRAINT "RespostaUsuario_Respostas_id_fkey";

-- DropForeignKey
ALTER TABLE "RespostaUsuario" DROP CONSTRAINT "RespostaUsuario_Usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Respostas" DROP CONSTRAINT "Respostas_perguntasId_fkey";

-- DropTable
DROP TABLE "Evento";

-- DropTable
DROP TABLE "Organizador";

-- DropTable
DROP TABLE "Perguntas";

-- DropTable
DROP TABLE "RespostaUsuario";

-- DropTable
DROP TABLE "Respostas";

-- DropTable
DROP TABLE "Usuario";
