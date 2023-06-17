const respostarUserControler = require('../controlers/RespostarUserControler');

const express = require('express');
const router = express.Router();

router.post('/respostarUser', respostarUserControler.createRespostaUsuario);
router.get('/respostarUser/:id', respostarUserControler.findRespostaUsuarioById);

module.exports = router;