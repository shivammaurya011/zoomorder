const mongoose = require('mongoose');
const schemaOptions = require('../utils/schemaOptions');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    menus: [{
      type: Schema.Types.ObjectId,
      ref: 'Menu',
    }],
    restaurants: [{
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
    }],
  },
  schemaOptions
);

const Category = mongoose.model('Category', categorySchema, 'Categories');
module.exports = Category;
