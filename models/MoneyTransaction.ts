import mongoose from "mongoose";

const MoneyTransactionSchema = new mongoose.Schema({
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
});

export default mongoose.models.MoneyTransaction ||
  mongoose.model("MoneyTransaction", MoneyTransactionSchema);
