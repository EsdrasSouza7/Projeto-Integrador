import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createPergunta(pergunta, evento){
    const perguntas = await prisma.perguntas.create({
        data: {
            perguntas,
            eventoId: evento.id,
        },
    });
    return pergunta;
}

async function findPerguntaById(id) {
    return prisma.perguntas.findUnique({
        where: {id: Number(id)}
    });
}
module.exports = {
    createPergunta,
    findPerguntaById,
};