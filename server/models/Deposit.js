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
      required: "Deposit amount:"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const Deposit = mongoose.model("Deposit", depositSchema);

module.exports = Deposit;
