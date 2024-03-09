const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    location_id: {
      type: Number,
      required: true,
    },
    city_id: {
      type: Number,
      required: true,
    },
    locality: {
      type: String,
      required: true,
    },
    thumb: [
      {
        type: String,
        required: true,
      },
    ],
    aggregate_rating: {
      type: Number,
      required: true,
    },
    rating_text: {
      type: String,
      required: true,
    },
    min_price: {
      type: Number,
      required: true,
    },
    contact_number: {
      type: Number,
      required: true,
    },
    cuisine: [
      {
        type: String,
        required: true,
      },
    ],
    image: {
      type: String,
      required: true,
    },
    mealtype_id: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Restaurants = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurants;
