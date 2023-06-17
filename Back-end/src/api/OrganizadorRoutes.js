const organizadorControler = require('../controlers/OrganizadorControler');

const express = require('express');
const router = express.Router();

router.post('/organizador', organizadorControler.createOrganizador);
router.get('/organizador/:id', organizadorControler.findOrganizador);
router.put('/organizador/:id', organizadorControler.updateOrganizador);
router.delete('/organizador/:id', organizadorControler.deleteOrganizador);

module.exports = router;