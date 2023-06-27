const eventoService = require('../service/EventoService')
const organizadorService = require('../service/OrganizadorService')

async function createEvento(req, res) {
    try {

        const {nomeEvento, descricao, organizadorId} = req.body

        // const organizador = organizadorService.findOrganizadorById(organizadorId)

        evento = await eventoService.createEvento(nomeEvento, descricao, organizadorId)

        return res.json({
            success: true,
            data: evento,
            message: "evento created successfully",
        });

    } catch (error) {
        return res.json({error})
    }
}

async function findEvento(req, res){
    try {
        const {id} = req.params;
        const evento = await eventoService.findEventoById(id);

        if (!evento){
            return res.json({
                    success: false,
                    data: {},
                    message: "Could not find this evento",
            });
        }

        return res.json({
            success: true,
            data: evento,
            message: "evento found successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}

async function updateEvento(req, res){
    try {
        const {id} = req.params;
        const {name, email} = req.body;

        let evento = await eventoService.updateEvento(id);

        if (!evento){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this evento",
            });
        }
        evento = await eventoService.updateEvento(id, name, email);

        return res.json({
            success: true,
            data: evento,
            message: "evento updated successfully",
        });

    }catch (error) {
        return res.json({error})

    }
}
async function deleteEvento(req, res) {
    try {
        const { id } = req.params;

        const evento = await eventoService.findEventoById(id);
        if (!evento){
            return res.json({
                success: false,
                data: {},
                message: "Could not find this evento",
            });
        }

        await eventoService.deleteEventoById(id);
        return res.json({
            success: true,
            data: evento,
            message: "evento deleted successfully",
        });
    } catch (error) {
        return res.json({ error });
    }
}

module.exports = {
    createEvento,
    findEvento,
    updateEvento,
    deleteEvento,
};