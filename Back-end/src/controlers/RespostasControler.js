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
module.exports = {
    createResposta,
    findResposta,
};