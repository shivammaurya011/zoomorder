const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    location_id: Number,
    city_id: Number,
    locality: String,
    thumb: [String],
    aggregate_rating: Number,
    rating_text: String,
    min_price: Number,
    contact_number: Number,
    cuisine: [String],
    image: String,
    mealtype_id: Number,
  },
  schemaOptions
);

const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'Restaurants');
module.exports = Restaurant;
