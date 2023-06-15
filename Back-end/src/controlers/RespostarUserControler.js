const respostaUsuarioService = require('../service/RespostasUserService')

async function createRespostaUsuario(req, res) {
    try {
        const {usuario, pergunta, resposta} = req.body

        respostaUsuario = await respostaUsuarioService.createRespostaUsuario(usuario, pergunta, resposta)

        return res.json({
            success: true,
            data: respostaUsuario,
            message: "resposta usuario created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}

async function findRespostaUsuarioById(id) {
    return prisma.resposta.findUnique({
        where: {id: Number(id)}
    });
    
}
module.exports = {
    createRespostaUsuario,
    findRespostaUsuarioById,
};