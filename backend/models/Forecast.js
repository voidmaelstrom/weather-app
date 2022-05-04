const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const ForecastSchema = Schema(
  {
    latitude: {
      Type: Number,
      Required: true
    },
    longitude: {
      Type: Number,
      Required: true
    },
    address: {
      Type: String,
      Required: true
    },
    description: {
      Type: String,
      Required: true
    },
      datetime: {
        Type: Number,
        Required: true
      },
      temp: {
        Type: Number,
        Required: true
      },
      feelslike: {
        Type: Number,
        Required: true
      }
    
  }
)

module.exports = model("Forecast", ForecastSchema)