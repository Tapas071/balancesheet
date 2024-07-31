import mongoose from "mongoose";

const MoneyTransaction2Schema = new mongoose.Schema({
  location: {
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

export default mongoose.models.MoneyTransaction2 ||
  mongoose.model("MoneyTransaction2", MoneyTransaction2Schema);
