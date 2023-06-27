import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function createUsuario(email, senha) {
    const usuario = await prisma.usuario.create({
        data: {
            email, 
            senha,
        },
    });

    return usuario;
}

async function findUsuarioByEmail(email) {
    const usuario = await prisma.usuario.findUnique({
        where: {email}
    });

    return usuario;
    
}

async function findUsuarioById(id) {
    return prisma.usuario.findUnique({
        where: {id: Number(id)}
    });
    
}

async function updateUsuario(id , email, senha) {

    const user = await prisma.usuario.update({
        where: { id: Number(id) },
        data: {email, senha }
    })

    return user;
}

async function deleteUsuarioById(id) {

    return prisma.usuario.delete({where: {id: Number(id)}});
}
module.exports = {
    createUsuario,
    deleteUsuarioById,
    updateUsuario,
    findUsuarioById,
    findUsuarioByEmail,
};