const mongoose = require('mongoose');
const schemaOptions = require('../utils/schemaOptions');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: {
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
    phoneNumber: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    profilePicture: String,
    dateOfBirth: Date,
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
    },
    orderHistory: [{
      type: Schema.Types.ObjectId,
      ref: 'Order',
    }],
    paymentMethods: [{
      type: String,
      details: {
        lastFourDigits: String,
        expirationDate: String,
      },
    }],
    dietaryPreferences: [String],
    favoriteCuisines: [String],
    notificationPreferences: {
      email: Boolean,
      sms: Boolean,
      push: Boolean,
    },
    role: {
      type: String,
      enum: ['customer', 'admin', 'deliveryPerson'],
      default: 'customer',
    },
    authToken: String,
  },
  schemaOptions
);

const User = mongoose.model('User', userSchema);
module.exports = User;
