const perguntaService = require('../service/PerguntasService')

async function createPergunta(req, res) {
    try {
        const {pergunta, eventoId} = req.body

        const perguntas = await perguntaService.createPergunta(pergunta, eventoId)

        return res.json({
            success: true,
            data: perguntas,
            message: "pergunta created successfully",
        });

    } catch (error) {
        const erroJson = {
            error: error.message,
            stack: error.stack,
        };
        return res.json({erroJson})
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
        const erroJson = {
            error: error.message,
            stack: error.stack,
        };
        return res.json({erroJson})
    }
}
async function deletePergunta(req, res) {
    try {
        const { id } = req.params;

        const pergunta = await perguntaService.findPerguntaById(id);
        if (!pergunta){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this pergunta",
            });
        }

        await perguntaService.deletePerguntaById(id);
        return res.json({
            success: true,
            data: pergunta,
            message: "pergunta deleted successfully",
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
    createPergunta,
    findPergunta,
    deletePergunta,
};