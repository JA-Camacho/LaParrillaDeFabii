const express = require('express');
const router = express.Router();
const plato = require('../controllers/plato.controllers');
const upload = require('../libs/multer');
router.get('/', plato.getPlatos);
router.post('/', upload.single('foto'), plato.createPlato);
router.put('/:id', plato.editPlato);
router.delete('/:id', plato.deletePlato);

module.exports = router;