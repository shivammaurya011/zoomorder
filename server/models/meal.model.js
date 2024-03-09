const mongoose = require('mongoose');
const schemaOptions = require('../utils/schemaOptions');
const Schema = mongoose.Schema;

const mealTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    meal_type: {
      type: Number,
      required: true,
    },
  },
  schemaOptions
);

const MealType = mongoose.model('MealType', mealTypeSchema, 'MealTypes');
module.exports = MealType;
