const respostasControler = require('../controlers/RespostasControler');

const express = require('express');
const router = express.Router();

router.post('/respostas', respostasControler.createResposta);
router.get('/respostas/:id', respostasControler.findResposta);
router.delete('/respostas/:id', respostasControler.deleteResposta);

module.exports = router;