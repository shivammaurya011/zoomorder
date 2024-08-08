const mongoose = require('mongoose');
const schemaOptions = require('../utils/schemaOptions');
const Schema = mongoose.Schema;

const locationSchema = new Schema(
  {
    area: {
      type: String,
      required: true,
      unique: true
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

const Location = mongoose.model('Location', locationSchema, 'Locations');
module.exports = Location;
