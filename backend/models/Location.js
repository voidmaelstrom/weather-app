const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const LocationSchema = Schema(
  {
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
        type: String
    }
  }
)

module.exports = model("Location", LocationSchema)