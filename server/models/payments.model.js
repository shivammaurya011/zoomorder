const mongoose = require('mongoose');
const schemaOptions = require('../utils/schemaOptions');
const Schema = mongoose.Schema;

const paymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    paymentDate: {
      type: Date,
      required: true,
    },
    amount: Number,
    paymentMethod: String,
    transactionId: String,
    status: {
      type: String,
      enum: ['pending', 'success', 'failed'],
      required: true,
    },
  },
  schemaOptions
);

const Payment = mongoose.model('Payment', paymentSchema, 'Payments');
module.exports = Payment;
