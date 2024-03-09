const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controllers');

router.post('/placeOrder', orderController.placeOrder);
router.get('/orders/:orderId', orderController.getOrderById);
router.get('/orders', orderController.getAllOrders); 
router.put('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.cancelOrder);

module.exports = router;
