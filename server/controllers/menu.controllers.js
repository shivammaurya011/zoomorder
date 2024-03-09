const Menu = require('../models/menu.model');

const menuController = {
  getAllMenus: async (req, res) => {
    try {
      const allMenus = await Menu.find();
      res.status(200).json(allMenus);
    } catch (error) {
      console.error('Error in getAllMenus controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getMenuById: async (req, res) => {
    try {
      const menuId = req.params.menuId;
      const menu = await Menu.findById(menuId);

      if (!menu) {
        return res.status(404).json({ message: 'Menu not found.' });
      }

      res.status(200).json(menu);
    } catch (error) {
      console.error('Error in getMenuById controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  createMenu: async (req, res) => {
    try {
      // Assuming the request body contains menu item details
      const { restaurantId, itemPrice, itemName, itemDescription, isVeg } = req.body;

      const newMenu = new Menu({
        restaurantId,
        itemPrice,
        itemName,
        itemDescription,
        isVeg,
      });

      await newMenu.save();

      res.status(201).json({ message: 'Menu item created successfully.', menuId: newMenu._id });
    } catch (error) {
      console.error('Error in createMenu controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateMenu: async (req, res) => {
    try {
      const menuId = req.params.menuId;
      const updatedData = req.body;

      const menu = await Menu.findByIdAndUpdate(menuId, updatedData, { new: true });

      if (!menu) {
        return res.status(404).json({ message: 'Menu item not found.' });
      }

      res.status(200).json({ message: 'Menu item updated successfully.' });
    } catch (error) {
      console.error('Error in updateMenu controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteMenu: async (req, res) => {
    try {
      const menuId = req.params.menuId;

      const deletedMenu = await Menu.findByIdAndRemove(menuId);

      if (!deletedMenu) {
        return res.status(404).json({ message: 'Menu item not found.' });
      }

      res.status(200).json({ message: 'Menu item deleted successfully.' });
    } catch (error) {
      console.error('Error in deleteMenu controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = menuController;
