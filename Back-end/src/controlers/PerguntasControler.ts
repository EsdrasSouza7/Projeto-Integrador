import { PrismaClient, Perguntas } from "@prisma/client";

class PerguntasControler{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<Perguntas, 'id'>) {
        try {
            return this.prisma.perguntas.create({
                data: {
                    ... data,
                },
            });
        } catch (error) {
            return error;
        }
    }
}

export default PerguntasControler;