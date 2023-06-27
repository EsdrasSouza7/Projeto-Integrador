const respostaUsuarioService = require('../service/RespostasUserService')

async function createRespostaUsuario(req, res) {
    try {
        const {usuario, pergunta, resposta} = req.body

        const respostaUsuario = await respostaUsuarioService.createRespostaUsuario(usuario, pergunta, resposta)

        return res.json({
            success: true,
            data: respostaUsuario,
            message: "resposta usuario created successfully",
        });

    } catch (error) {
        return res.json({error})
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