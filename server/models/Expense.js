const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Please include a name for this expense"
    },
    value: {
      type: Number,
      max: 0,
      required: "Expense amount:"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

module.exports = expenseSchema;
