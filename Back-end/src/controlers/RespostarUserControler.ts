import { PrismaClient, RespostaUsuario } from "@prisma/client";

class RespostaUsuarioControler{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<RespostaUsuario, 'id'>) {
        try {
            return this.prisma.respostaUsuario.create({
                data: {
                    ... data,
                },
            });
        } catch (error) {
            return error;
        }
    }
}

export default RespostaUsuarioControler;