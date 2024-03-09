const mongoose = require('mongoose');
const schemaOptions = require('../utils/schemaOptions');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
    },
    menu: {
      type: Schema.Types.ObjectId,
      ref: 'Menu',
    },
    rating: {
      type: Number,
      required: true,
    },
    comments: String,
  },
  schemaOptions
);

const Review = mongoose.model('Review', reviewSchema, 'Reviews');
module.exports = Review;
