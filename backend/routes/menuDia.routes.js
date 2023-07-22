const express = require('express');

const router = express.Router();
const menuDia = require('../controllers/menuDia.controllers');
router.get('/', menuDia.getMenu);
router.post('/', menuDia.createMenu);
router.put('/:id', menuDia.editMenu);
router.delete('/:id', menuDia.deleteMenu);

module.exports = router;