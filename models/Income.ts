import mongoose from "mongoose";

const IncomeSchema: mongoose.Schema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Income ||
  mongoose.model("Income", IncomeSchema);