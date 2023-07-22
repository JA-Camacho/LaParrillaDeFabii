const express = require('express');

const router = express.Router();
const info = require('../controllers/info.controllers');
router.get('/', info.getInfo);
router.post('/', info.createInfo);
router.put('/:id', info.editInfo);
router.delete('/:id', info.deleteInfo);

module.exports = router;