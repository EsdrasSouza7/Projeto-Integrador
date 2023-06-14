import { PrismaClient, Evento } from "@prisma/client";

class EventoControler{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<Evento, 'id'>) {
        try {
            return this.prisma.evento.create({
                data: {
                    ... data,
                },
            });
        } catch (error) {
            return error;
        }
    }
}

export default EventoControler;