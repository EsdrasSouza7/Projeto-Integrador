const eventoControler = require('../controlers/EventoControler');

const express = require('express');
const router = express.Router();

router.post('/evento', eventoControler.createEvento);
router.get('/evento/:id', eventoControler.findEvento);
router.put('/evento/:id', eventoControler.updateEvento);
router.delete('/evento/:id', eventoControler.deleteEvento);

module.exports = router;