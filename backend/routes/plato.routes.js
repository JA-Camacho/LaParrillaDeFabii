const express = require('express');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = express.Router();
const plato = require('../controllers/plato.controllers');
router.get('/', plato.getPlatos);
router.post('/', upload.single('foto'), plato.createPlato);
router.put('/:id', plato.editPlato);
router.delete('/:id', plato.deletePlato);

module.exports = router;