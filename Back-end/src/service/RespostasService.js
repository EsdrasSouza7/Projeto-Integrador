import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createResposta(resposta, perguntasId){
    const respostas = await prisma.respostas.create({
        data: {
            resposta,
            perguntasId,
        },
    });
    return respostas;
}

async function findRespostaById(id) {
    return prisma.respostas.findUnique({
        where: {id: Number(id)}
    });
}

async function deleteRespostaById(id) {

    return prisma.respostas.delete({where: {id: Number(id)}});
}
module.exports = {
    createResposta,
    findRespostaById,
    deleteRespostaById,
};