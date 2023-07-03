const organizadorService = require('../service/OrganizadorService');

async function createOrganizador(req, res) {
    try {
        const {email, senha} = req.body
        let organizador = await organizadorService.findOrganizadorByEmail(email);

        if (organizador) {
            return res.json({
                success: false,
                data: {},
                message: "organizador with this email already exist",
            });
        }

        organizador = await organizadorService.createOrganizador(email, senha)

        return res.json({
            success: true,
            data: organizador,
            message: "organizador created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}

async function findOrganizador(req, res){
    // try {
        const {id} = req.params;
        const organizador = await organizadorService.findOrganizadorById(id);

        if (!organizador){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this organizador",
            });
        }

        return res.json({
            success: true,
            data: organizador,
            message: "organizador found successfully",
        });

    // }catch (error) {
    //     return res.json({error})

    // }
}

async function updateOrganizador(req, res){
    try {
        const {id} = req.params;
        const {email, senha} = req.body;

        let organizador = await organizadorService.updateOrganizador(id);

        if (!organizador){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this organizador",
            });
        }
        organizador = await organizadorService.updateOrganizador(id, email, senha);

        return res.json({
            success: true,
            data: organizador,
            message: "organizador updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteOrganizador(req, res) {
    try {
        const { id } = req.params;

        const organizador = await organizadorService.findOrganizadorById(id);
        if (!organizador){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this organizador",
            });
        }

        await organizadorService.deleteOrganizadorById(id);
        return res.json({
            success: true,
            data: organizador,
            message: "organizador deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createOrganizador,
    findOrganizador,
    updateOrganizador,
    deleteOrganizador,
};
