const express = require('express');
const router = express.Router();
const coments = require('../controllers/coments.controllers');
router.get('/', coments.getComents);
router.post('/', coments.createComent);
router.put('/:id', coments.editComent);
router.delete('/:id', coments.deleteComent);

module.exports = router;