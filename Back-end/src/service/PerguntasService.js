import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createPergunta(pergunta, eventoId){
    const perguntas = await prisma.perguntas.create({
        data: {
            pergunta,
            eventoId,
        },
    });
    return perguntas;
}

async function findPerguntaById(id) {
    return prisma.perguntas.findUnique({
        where: {id: Number(id)}
    });
}
async function deletePerguntaById(id) {

    return prisma.perguntas.delete({where: {id: Number(id)}});
}
module.exports = {
    createPergunta,
    findPerguntaById,
    deletePerguntaById,
};