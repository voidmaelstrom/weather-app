const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const LocationSchema = Schema(
  {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
    name: {
      type: String,
      unique: true
    }
  }
)

module.exports = model("Location", LocationSchema)