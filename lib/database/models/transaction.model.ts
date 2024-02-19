import { Schema, model, models } from 'mongoose';

interface ITransaction {
  createdAt?: Date;
  stripeId: string;
  amount: number;
  plan?: string;
  credits?: number;
  buyer: string; // Assuming buyer is a string representing ObjectId
}

const TransactionSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
  },
  credits: {
    type: Number,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Transaction =
  models?.Transaction || model('Transaction', TransactionSchema);

export default Transaction;
