const Restaurant = require('../models/restaurant.model');
const Menu = require('../models/menu.model');

const restaurantController = {
  // Restaurant functions
  createRestaurant: async (req, res) => {
    try {
      const { name, city, location_id, city_id, locality, thumb, aggregate_rating, rating_text, min_price, contact_number, cuisine, image, mealtype_id } = req.body;
      
      const newRestaurant = new Restaurant({
        name,
        city,
        location_id,
        city_id,
        locality,
        thumb,
        aggregate_rating,
        rating_text,
        min_price,
        contact_number,
        cuisine,
        image,
        mealtype_id,
      });

      await newRestaurant.save();

      res.status(201).json({ message: 'Restaurant created successfully.' });
    } catch (error) {
      console.error('Error in createRestaurant controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getAllRestaurants: async (req, res) => {
    try {
      const allRestaurants = await Restaurant.find();
      res.status(200).json(allRestaurants);
    } catch (error) {
      console.error('Error in getAllRestaurants controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getRestaurantById: async (req, res) => {
    try {
      const restaurantId = req.params.restaurantId;
      const restaurant = await Restaurant.findById(restaurantId);

      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found.' });
      }

      res.status(200).json(restaurant);
    } catch (error) {
      console.error('Error in getRestaurantById controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateRestaurant: async (req, res) => {
    try {
      const restaurantId = req.params.restaurantId;
      const updatedData = req.body;

      const restaurant = await Restaurant.findByIdAndUpdate(restaurantId, updatedData, { new: true });

      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found.' });
      }

      res.status(200).json({ message: 'Restaurant updated successfully.' });
    } catch (error) {
      console.error('Error in updateRestaurant controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteRestaurant: async (req, res) => {
    try {
      const restaurantId = req.params.restaurantId;

      const deletedRestaurant = await Restaurant.findByIdAndRemove(restaurantId);

      if (!deletedRestaurant) {
        return res.status(404).json({ message: 'Restaurant not found.' });
      }

      res.status(200).json({ message: 'Restaurant deleted successfully.' });
    } catch (error) {
      console.error('Error in deleteRestaurant controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Menu functions
  addMenuItem: async (req, res) => {
    try {
      const restaurantId = req.params.restaurantId;
      const { itemPrice, itemName, itemDescription, isVeg } = req.body;

      const restaurant = await Restaurant.findById(restaurantId);

      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found.' });
      }

      const newMenuItem = new Menu({
        restaurantId,
        itemPrice,
        itemName,
        itemDescription,
        isVeg,
      });

      await newMenuItem.save();

      res.status(201).json({ message: 'Menu item added successfully.' });
    } catch (error) {
      console.error('Error in addMenuItem controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getMenu: async (req, res) => {
    try {
      const restaurantId = req.params.restaurantId;
      const menuItems = await Menu.find({ restaurantId });

      res.status(200).json(menuItems);
    } catch (error) {
      console.error('Error in getMenu controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateMenuItem: async (req, res) => {
    try {
      const { restaurantId, menuItemId } = req.params;
      const updatedData = req.body;

      const menuItem = await Menu.findOneAndUpdate({ _id: menuItemId, restaurantId }, updatedData, { new: true });

      if (!menuItem) {
        return res.status(404).json({ message: 'Menu item not found.' });
      }

      res.status(200).json({ message: 'Menu item updated successfully.' });
    } catch (error) {
      console.error('Error in updateMenuItem controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteMenuItem: async (req, res) => {
    try {
      const { restaurantId, menuItemId } = req.params;

      const deletedMenuItem = await Menu.findOneAndRemove({ _id: menuItemId, restaurantId });

      if (!deletedMenuItem) {
        return res.status(404).json({ message: 'Menu item not found.' });
      }

      res.status(200).json({ message: 'Menu item deleted successfully.' });
    } catch (error) {
      console.error('Error in deleteMenuItem controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = restaurantController;
