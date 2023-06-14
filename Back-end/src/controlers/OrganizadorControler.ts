import { PrismaClient, Organizador } from "@prisma/client";

class OrganizadorControler{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<Organizador, 'id'>) {
        try {
            return this.prisma.organizador.create({
                data: {
                    ... data,
                },
            });
        } catch (error) {
            return error;
        }
    }
}

export default OrganizadorControler;