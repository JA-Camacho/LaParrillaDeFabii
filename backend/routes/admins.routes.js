const express = require('express');

const router = express.Router();
const admins = require('../controllers/admins.controllers');
router.get('/', admins.getAdmins);
router.post('/', admins.createAdmin);
router.put('/:id', admins.editAdmin);
router.delete('/:id', admins.deleteAdmin);

module.exports = router;