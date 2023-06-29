const respostaService = require('../service/RespostasService')

async function createResposta(req, res) {
    try {
        const {resposta, perguntasId} = req.body

        const respostas = await respostaService.createResposta(resposta, perguntasId)

        return res.json({
            success: true,
            data: respostas,
            message: "resposta created successfully",
        });

    } catch (error) {
        const erroJson = {
            error: error.message,
            stack: error.stack,
        };
        return res.json({erroJson})
    }
}

async function findResposta(req, res){
    try {
        const {id} = req.params;
        const resposta = await respostaService.findRespostaById(id);

        if (!resposta){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this resposta",
            });
        }

        return res.json({
            success: true,
            data: resposta,
            message: "resposta found successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}

async function deleteResposta(req, res) {
    try {
        const { id } = req.params;

        const resposta = await respostaService.findRespostaById(id);
        if (!resposta){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this resposta",
            });
        }

        await respostaService.deleteRespostaById(id);
        return res.json({
            success: true,
            data: resposta,
            message: "resposta deleted successfully",
        });
    } catch (error) {
        const erroJson = {
            error: error.message,
            stack: error.stack,
        };
        return res.json({erroJson})
    }
}
module.exports = {
    createResposta,
    findResposta,
    deleteResposta,
};