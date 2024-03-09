const mongoose = require('mongoose');
const schemaOptions = require('../utils/schemaOptions');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: [{
      menu: {
        type: Schema.Types.ObjectId,
        ref: 'Menu',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    }],
    totalCost: {
      type: Number,
      required: true,
    },
    deliveryAddress: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    status: {
      type: String,
      enum: ['pending', 'delivered', 'cancelled'],
      default: 'pending',
    },
  },
  schemaOptions
);

const Order = mongoose.model('Order', orderSchema, 'Orders');
module.exports = Order;
