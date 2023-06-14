import { PrismaClient, Usuario } from "@prisma/client";

class UsuarioControler{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<Usuario, 'id'>) {
        try {
            return this.prisma.usuario.create({
                data: {
                    ... data,
                },
            });
        } catch (error) {
            return error;
        }
    }
}

export default UsuarioControler;