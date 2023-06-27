-- CreateTable
CREATE TABLE "Organizador" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Organizador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Evento" (
    "id" SERIAL NOT NULL,
    "nomeEvento" TEXT NOT NULL,
    "descricao" TEXT,
    "Organizador_Email" TEXT,

    CONSTRAINT "Evento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perguntas" (
    "id" SERIAL NOT NULL,
    "pergunta" TEXT NOT NULL,
    "eventoId" INTEGER,

    CONSTRAINT "Perguntas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Respostas" (
    "id" SERIAL NOT NULL,
    "resposta" TEXT NOT NULL,
    "perguntasId" INTEGER,

    CONSTRAINT "Respostas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RespostaUsuario" (
    "id" SERIAL NOT NULL,
    "Usuario_id" INTEGER,
    "Respostas_id" INTEGER,
    "Perguntas_id" INTEGER,

    CONSTRAINT "RespostaUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Organizador_email_key" ON "Organizador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_Organizador_Email_fkey" FOREIGN KEY ("Organizador_Email") REFERENCES "Organizador"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perguntas" ADD CONSTRAINT "Perguntas_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_perguntasId_fkey" FOREIGN KEY ("perguntasId") REFERENCES "Perguntas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespostaUsuario" ADD CONSTRAINT "RespostaUsuario_Usuario_id_fkey" FOREIGN KEY ("Usuario_id") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespostaUsuario" ADD CONSTRAINT "RespostaUsuario_Respostas_id_fkey" FOREIGN KEY ("Respostas_id") REFERENCES "Respostas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RespostaUsuario" ADD CONSTRAINT "RespostaUsuario_Perguntas_id_fkey" FOREIGN KEY ("Perguntas_id") REFERENCES "Perguntas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
