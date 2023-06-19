import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createResposta(respostas, pergunta){
    const resposta = await prisma.respostas.create({
        data: {
            respostas,
            perguntaId: pergunta.id,
        },
    });
    return resposta;
}

async function findRespostaById(id) {
    return prisma.respostas.findUnique({
        where: {id: Number(id)}
    });
}
module.exports = {
    createResposta,
    findRespostaById,
};