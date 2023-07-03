const respostaUsuarioService = require('../service/RespostasUserService')

async function createRespostaUsuario(req, res) {
    try {

        const {usuarioId, perguntasId, respostasId} = req.body

        const respostaUsuario = await respostaUsuarioService.createRespostaUsuario(usuarioId, perguntasId, respostasId)

        return res.json({
            success: true,
            data: respostaUsuario,
            message: "respostaUsuario created successfully",
        });

    } catch (error) {
        const erroJson = {
            error: error.message,
            stack: error.stack,
        };
        return res.json({erroJson})
    }
}

async function findRespostaUsuario(req, res){
    try {
        const {id} = req.params;
        const respostaUsuario = await respostaUsuarioService.findRespostaUsuarioById(id);

        if (!respostaUsuario){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this respostaUsuario",
            });
        }

        return res.json({
            success: true,
            data: respostaUsuario,
            message: "respostaUsuario found successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
module.exports = {
    createRespostaUsuario,
    findRespostaUsuario,
};