import { PrismaClient, Respostas } from "@prisma/client";

class RespostasControler{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<Respostas, 'id'>) {
        try {
            return this.prisma.respostas.create({
                data: {
                    ... data,
                },
            });
        } catch (error) {
            return error;
        }
    }
}

export default RespostasControler;