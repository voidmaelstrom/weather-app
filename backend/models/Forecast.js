const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const ForecastSchema = Schema(
  {
    latitude: {
      Type: Number,
    },
    longitude: {
      Type: Number,
    },
    address: {
      Type: String,
    },
    description: {
      Type: String,
    },
    datetime: {
      Type: Number,
    },
    temp: {
      Type: Number,
    },
    feelslike: {
      Type: Number,
    }
  }
)

module.exports = model("Forecast", ForecastSchema)