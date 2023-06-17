const userController = require('../controlers/UserControler');

const express = require('express');
const router = express.Router();

router.post('/user', userController.createUsuario);
router.get('/user/:id', userController.findUsuario);
router.put('/user/:id', userController.updateUsuario);
router.delete('/user/:id', userController.deleteUsuario);

module.exports = router;