const respostaService = require('../service/RespostasService')

async function createResposta(req, res) {
    try {
        const {respostas, perguntas} = req.body

        resposta = await respostaService.createResposta(respostas, perguntas)

        return res.json({
            success: true,
            data: resposta,
            message: "resposta created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}

async function findRespostaById(id) {
    return prisma.resposta.findUnique({
        where: {id: Number(id)}
    });
    
}
module.exports = {
    createResposta,
    findRespostaById,
};