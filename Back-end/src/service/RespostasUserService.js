import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createRespostaUsuario(usuario, resposta, pergunta){
    const respostaUsuario = await prisma.respostaUsuario.create({
        data: {
            usuarioId: usuario.id,
            perguntaId: pergunta.id,
            respostaId: resposta.id,
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