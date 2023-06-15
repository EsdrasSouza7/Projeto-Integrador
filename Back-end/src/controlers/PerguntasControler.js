const perguntaService = require('../service/PerguntasService')

async function createPergunta(req, res) {
    try {
        const {pergunta, evento} = req.body

        pergunta = await perguntaService.createPergunta(pergunta, evento)

        return res.json({
            success: true,
            data: pergunta,
            message: "pergunta created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}

async function findPerguntaById(id) {
    return prisma.pergunta.findUnique({
        where: {id: Number(id)}
    });
    
}
module.exports = {
    createPergunta,
    findPerguntaById,
};