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

async function findPergunta(req, res){
    try {
        const {id} = req.params;
        const pergunta = await perguntaService.findPerguntaById(id);

        if (!pergunta){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this pergunta",
            });
        }

        return res.json({
            success: true,
            data: pergunta,
            message: "pergunta found successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
module.exports = {
    createPergunta,
    findPergunta,
};