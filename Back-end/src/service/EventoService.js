import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createEvento(nomeEvento, descricao, organizador){
    const evento = await prisma.evento.create({
        data: {
            nomeEvento,
            descricao,
            organizador
        },
    });
    return evento;
}

async function findEventoById(id) {
    return prisma.evento.findUnique({
        where: {id: Number(id)}
    });
    
}

async function updateEvento(id, nomeEvento, descricao) {

    const user = await prisma.evento.update({
        where: { id: Number(id) },
        data: {nomeEvento, descricao}
    });

    return user;
}

async function deleteEventoById(id) {

    return prisma.evento.delete({where: {id: Number(id)}});
}
module.exports = {
    createEvento,
    deleteEventoById,
    updateEvento,
    findEventoById,
};
