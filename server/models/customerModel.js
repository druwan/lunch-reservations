import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  orders: [Object],
});

export default mongoose.model('Customer', customerSchema);
