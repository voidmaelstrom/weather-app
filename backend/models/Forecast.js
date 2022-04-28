const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const ForecastSchema = Schema(
  {
    
  }
)

module.exports = model("Forecast", ForecastSchema)