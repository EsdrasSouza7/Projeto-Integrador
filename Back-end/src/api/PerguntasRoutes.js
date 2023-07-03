const perguntasControler = require('../controlers/PerguntasControler');

const express = require('express');
const router = express.Router();

router.post('/perguntas', perguntasControler.createPergunta);
router.get('/perguntas/:id', perguntasControler.findPergunta);
router.delete('/perguntas/:id', perguntasControler.deletePergunta);

module.exports = router;