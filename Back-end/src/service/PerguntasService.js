import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createPergunta(pergunta, evento){
    const pergunta = await prisma.pergunta.create({
        data: {
            pergunta,
            eventoId: evento.id,
        },
    });
    return pergunta;
}

async function findPerguntaById(id) {
    return prisma.pergunta.findUnique({
        where: {id: Number(id)}
    });
}
module.exports = {
    createPergunta,
    findPerguntaById,
};