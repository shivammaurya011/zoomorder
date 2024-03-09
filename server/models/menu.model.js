const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema(
  {
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
    itemPrice: Number,
    itemName: String,
    itemDescription: String,
    isVeg: Boolean,
  },
  schemaOptions
);

const Menu = mongoose.model('Menu', menuSchema, 'Menus');
module.exports = Menu;
