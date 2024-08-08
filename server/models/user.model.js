const mongoose = require('mongoose');
const schemaOptions = require('../utils/schemaOptions');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String
    },
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    picture: {
      type: String
    },
    dob: {
      type: Date
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    orderHistory: [{
      type: Schema.Types.ObjectId,
      ref: 'Order',
    }],
    role: {
      type: String,
      enum: ['customer', 'admin', 'deliveryPerson', 'restaurant'],
      default: 'customer',
    },
  },
  schemaOptions
);

const User = mongoose.model('User', userSchema);
module.exports = User;
