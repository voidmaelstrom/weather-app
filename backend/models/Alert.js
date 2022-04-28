const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const AlertSchema = Schema(
  {
    
  }
)

module.exports = model("Alert", AlertSchema)