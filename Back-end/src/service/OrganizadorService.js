import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createOrganizador(email, senha) {
    const organizador = await prisma.organizador.create({
        data: {
            email, 
            senha,
        },
    });

    return organizador;
}

async function findOrganizadorByEmail(email) {
    const organizador = await prisma.organizador.findUnique({
        where: {email}
    });

    return organizador;
    
}

async function findOrganizadorById(id) {
    return prisma.organizador.findUnique({
        where: {id: Number(id)}
    });
    
}

async function updateOrganizador(id , senha, email) {

    const organizador = await prisma.organizador.update({
        where: { id: Number(id) },
        data: {email, senha }
    });

    return organizador;
}

async function deleteOrganizadorById(id) {

    return prisma.organizador.delete({where: {id: Number(id)}});
}
module.exports = {
    createOrganizador,
    deleteOrganizadorById,
    updateOrganizador,
    findOrganizadorById,
    findOrganizadorByEmail,
};