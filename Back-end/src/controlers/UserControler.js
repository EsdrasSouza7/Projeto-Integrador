const usuarioService = require('../service/UserService');

async function createUsuario(req, res) {
    try {
        const {email, senha} = req.body
        let usuario = await usuarioService.findUsuarioByEmail(email);

        if (usuario) {
            return res.json({
                success: false,
                data: {},
                message: "usuario with this email already exist",
            });
        }

        usuario = await usuarioService.createUsuario(email, senha)

        return res.json({
            success: true,
            data: usuario,
            message: "usuario created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}

async function findUsuario(req, res){
    try {
        const {id} = req.params;
        const usuario = await usuarioService.findUsuarioById(id);

        if (!usuario){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this usuario",
            });
        }

        return res.json({
            success: true,
            data: usuario,
            message: "usuario found successfully",
        });
        
    }catch (error) {
        return res.json({error})

    }
}

async function updateUsuario(req, res){
    try {
        const {id} = req.params;
        const {name, email} = req.body;

        let usuario = await usuarioService.updaUteusuario(id);

        if (!usuario){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this usuario",
            });
        }
        usuario = await usuarioService.updateUsuario(id, name, email);

        return res.json({
            success: true,
            data: usuario,
            message: "usuario updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteUsuario(req, res) {
    try {
        const { id } = req.params;

        const usuario = await usuarioService.findUsuarioById(id);
        if (!usuario){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this usuario",
            });
        }

        await usuarioService.deleteUsuarioById(id);
        return res.json({
            success: true,
            data: usuario,
            message: "usuario deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createUsuario,
    findUsuario,
    updateUsuario,
    deleteUsuario,
};
