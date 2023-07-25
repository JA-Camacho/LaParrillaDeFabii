const express = require('express');
const router = express.Router();
const plato = require('../controllers/plato.controllers');

router.get('/', plato.getPlatos);
router.post('/', plato.createPlato);
router.put('/:id', plato.editPlato);
router.delete('/:id', plato.deletePlato);

module.exports = router;