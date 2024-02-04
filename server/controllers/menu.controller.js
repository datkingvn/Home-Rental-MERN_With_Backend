const Menu = require("../models/menu.model");
const getAllMenuItems = async (req, res) => {
    try {
        const menus = await Menu.find({});
        res.status(200).json(menus);
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
}

module.exports = {
    getAllMenuItems
}