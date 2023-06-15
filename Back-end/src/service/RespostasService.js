import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createResposta(resposta, pergunta){
    const resposta = await prisma.resposta.create({
        data: {
            resposta,
            perguntaId: pergunta.id,
        },
    });
    return resposta;
}

async function findRespostaById(id) {
    return prisma.resposta.findUnique({
        where: {id: Number(id)}
    });
}
module.exports = {
    createResposta,
    findRespostaById,
};