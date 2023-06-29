import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createRespostaUsuario(usuarioId, perguntasId, respostasId){
    const respostaUsuario = await prisma.respostaUsuario.create({
        data: {
            usuarioId,
            perguntasId,
            respostasId
        },
    });
    return respostaUsuario;
}

async function findRespostaUsuarioById(id) {
    return prisma.respostaUsuario.findUnique({
        where: {id: Number(id)}
    });
}
module.exports = {
    createRespostaUsuario,
    findRespostaUsuarioById,
};