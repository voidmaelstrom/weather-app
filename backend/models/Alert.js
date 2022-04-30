const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const AlertSchema = Schema(
  {
    event: { //the type of alert
      type: String,
      required: true,
    },
    headline: { //a short description of the alert
      type: String,
      required: true,
    },
    description: { //a full description of the alert
      type: String,
      required: true,
    },
    onset: { //the starting date time for the alert
      type: String,
      required: true,
    },
    ends: { //the ending date time for the alert
      type: String,
      required: true,
    },
  }
)

module.exports = model("Alert", AlertSchema)