const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const depositSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Please include a name for this deposit"
    },
    value: {
      type: Number,
      min: 0,
      required: "Please enter an amount for this deposit"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = depositSchema;
