const Cart = require("../models/cart.model");

// GET [Carts using Email]
const getCartByEmail = async (req, res) => {
    try {
        const email = req.query.email;
        const query = {email: email};
        const result = await Cart.find(query).exec();
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

// POST [Carts when Add to Cart]
const addToCart = async (req, res) => {
    const {menuItemId, name, recipe, image, category, price, quantity, email} = req.body;
    try {
        const existingCartItem = await Cart.findOne({menuItemId});
        if (existingCartItem) {
            return res.status(400).json({
                message: "Thêm Thành Công"
            })
        }

        const cartItem = await Cart.create({
            menuItemId, name, recipe, image, category, price, quantity, email
        })

        res.status(201).json(cartItem)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

// DELETE [items from carts]
const removeItemFromCarts = async (req, res) => {
    const itemId = req.params.id;
    try {
        const removedCart = await Cart.findByIdAndDelete(itemId);

        if (!removedCart) {
            res.status(401).json({
                message: "Không tìm thấy sản phẩm này!"
            })
        }

        res.status(200).json({
            message: "Xoá Thành Công"
        })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

// UPDATE [Cart Item]
const updateCart = async (req, res) => {
    const {menuItemId, name, recipe, image, category, price, quantity, email} = req.body;
    const itemId = req.params.id;

    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            itemId, {menuItemId, name, recipe, image, category, price, quantity, email},
            {new: true, runValidators: true}
        )
        if (!updatedCart) {
            return res.status(404).json({
                message: "Sản Phẩm Không Tồn Tại!"
            })
        }
        res.status(200).json(updatedCart)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

// Get single recipe
const getSingleCart = async (req, res) => {
    const itemId = req.params.id;
    try {
        const cartItem = await Cart.findById(itemId)
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

module.exports = {
    getCartByEmail, addToCart, removeItemFromCarts, updateCart, getSingleCart
}