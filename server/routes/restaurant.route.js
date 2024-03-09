const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurant.controller');

// Restaurant routes
router.post('/create', restaurantController.createRestaurant);
router.get('/', restaurantController.getAllRestaurants);
router.get('/:restaurantId', restaurantController.getRestaurantById);
router.put('/:restaurantId', restaurantController.updateRestaurant);
router.delete('/:restaurantId', restaurantController.deleteRestaurant);

// Menu routes
router.post('/:restaurantId/menu/add', restaurantController.addMenuItem);
router.get('/:restaurantId/menu', restaurantController.getMenu);
router.put('/:restaurantId/menu/:menuItemId', restaurantController.updateMenuItem);
router.delete('/:restaurantId/menu/:menuItemId', restaurantController.deleteMenuItem);

module.exports = router;
