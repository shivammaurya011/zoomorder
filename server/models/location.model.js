const mongoose = require('mongoose');
const schemaOptions = require('../utils/schemaOptions');
const Schema = mongoose.Schema;

const locationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city_id: {
      type: Number,
      required: true,
    },
    location_id: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country_name: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

const Location = mongoose.model('Location', locationSchema, 'Locations');
module.exports = Location;
