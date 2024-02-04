const express = require('express');
const menuController = require('../controllers/menu.controller')
const router = express.Router();


// Get All Menu Item
router.get('/', menuController.getAllMenuItems)

module.exports = router;