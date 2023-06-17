-- DropForeignKey
ALTER TABLE "Evento" DROP CONSTRAINT "Evento_Organizador_Email_fkey";

-- DropForeignKey
ALTER TABLE "Perguntas" DROP CONSTRAINT "Perguntas_eventoId_fkey";

-- DropForeignKey
ALTER TABLE "Respostas" DROP CONSTRAINT "Respostas_perguntasId_fkey";

-- AddForeignKey
ALTER TABLE "Evento" ADD CONSTRAINT "Evento_Organizador_Email_fkey" FOREIGN KEY ("Organizador_Email") REFERENCES "Organizador"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Perguntas" ADD CONSTRAINT "Perguntas_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "Evento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_perguntasId_fkey" FOREIGN KEY ("perguntasId") REFERENCES "Perguntas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
