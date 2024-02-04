const express = require('express');
const cartController = require('../controllers/cart.controller')
const router = express.Router();


// Get All Menu Item
router.get('/', cartController.getCartByEmail);
router.post('/', cartController.addToCart);
router.delete('/:id', cartController.removeItemFromCarts);
router.put('/:id', cartController.updateCart);
router.get('/:id', cartController.getSingleCart);

module.exports = router;