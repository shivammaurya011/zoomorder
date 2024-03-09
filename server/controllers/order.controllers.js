const Order = require('../models/order.model');

const orderController = {
  placeOrder: async (req, res) => {
    try {
      const { items, totalCost, customerId, deliveryAddress, paymentMethod } = req.body;
      
      const newOrder = new Order({
        items,
        totalCost,
        customerId,
        deliveryAddress,
        paymentMethod,
      });

      await newOrder.save();

      res.status(201).json({ message: 'Order placed successfully.', orderId: newOrder._id });
    } catch (error) {
      console.error('Error in placeOrder controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const order = await Order.findById(orderId);

      if (!order) {
        return res.status(404).json({ message: 'Order not found.' });
      }

      res.status(200).json(order);
    } catch (error) {
      console.error('Error in getOrderById controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const allOrders = await Order.find();
      res.status(200).json(allOrders);
    } catch (error) {
      console.error('Error in getAllOrders controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const orderId = req.params.orderId;
      const updatedData = req.body;

      const order = await Order.findByIdAndUpdate(orderId, updatedData, { new: true });

      if (!order) {
        return res.status(404).json({ message: 'Order not found.' });
      }

      res.status(200).json({ message: 'Order updated successfully.' });
    } catch (error) {
      console.error('Error in updateOrder controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  cancelOrder: async (req, res) => {
    try {
      const orderId = req.params.orderId;

      const canceledOrder = await Order.findByIdAndRemove(orderId);

      if (!canceledOrder) {
        return res.status(404).json({ message: 'Order not found.' });
      }

      res.status(200).json({ message: 'Order canceled successfully.' });
    } catch (error) {
      console.error('Error in cancelOrder controller:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = orderController;
