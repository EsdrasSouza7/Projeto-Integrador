/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Organizador" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "eventoId" INTEGER,

    CONSTRAINT "Organizador_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "nomeEvento" TEXT NOT NULL,
    "descricao" TEXT,
    "perguntasId" INTEGER,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perguntas" (
    "id" SERIAL NOT NULL,
    "pergunta" TEXT NOT NULL,
    "respostasId" INTEGER,
    "respostaUsuarioId" INTEGER,

    CONSTRAINT "Perguntas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respostas" (
    "id" SERIAL NOT NULL,
    "resposta" TEXT NOT NULL,
    "respostaUsuarioId" INTEGER,

    CONSTRAINT "Respostas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RespostaUsuario" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "RespostaUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "RespostaUsuarioId" INTEGER,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organizador_email_key" ON "Organizador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Organizador" ADD CONSTRAINT "Organizador_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_perguntasId_fkey" FOREIGN KEY ("perguntasId") REFERENCES "Perguntas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perguntas" ADD CONSTRAINT "Perguntas_respostasId_fkey" FOREIGN KEY ("respostasId") REFERENCES "Respostas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perguntas" ADD CONSTRAINT "Perguntas_respostaUsuarioId_fkey" FOREIGN KEY ("respostaUsuarioId") REFERENCES "RespostaUsuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_respostaUsuarioId_fkey" FOREIGN KEY ("respostaUsuarioId") REFERENCES "RespostaUsuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_RespostaUsuarioId_fkey" FOREIGN KEY ("RespostaUsuarioId") REFERENCES "RespostaUsuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
