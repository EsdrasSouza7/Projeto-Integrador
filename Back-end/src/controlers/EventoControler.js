const eventoService = require('../service/EventoService')

async function createEvento(req, res) {
    try {

        const {nomeEvento, descricao, organizadorEmail} = req.body

        evento = await eventoService.createEvento(nomeEvento, descricao, organizadorEmail)

        return res.json({
            success: true,
            data: evento,
            message: "evento created successfully",
        });

    } catch (error) {
        const erroJson = {
            error: error.message,
            stack: error.stack,
        };
        return res.json({erroJson})
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
        const erroJson = {
            error: error.message,
            stack: error.stack,
        };
        return res.json({erroJson})
    }
}

async function updateEvento(req, res){
    try {
        const {id} = req.params;
        const {nomeEvento, descricao} = req.body;

        let evento = await eventoService.updateEvento(id);

        if (!evento){
            return res.json({
                success: false,
                data: {},
                message: "Could not update this evento",
            });
        }
        evento = await eventoService.updateEvento(id, nomeEvento, descricao);

        return res.json({
            success: true,
            data: evento,
            message: "evento updated successfully",
        });

    }catch (error) {
        const erroJson = {
            error: error.message,
            stack: error.stack,
        };
        return res.json({erroJson})
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
        const erroJson = {
            error: error.message,
            stack: error.stack,
        };
        return res.json({erroJson})
    }
}

module.exports = {
    createEvento,
    findEvento,
    updateEvento,
    deleteEvento,
};