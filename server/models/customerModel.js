import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  id: String,
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  orders: [Object],
});

const Customer = new mongoose.model('Customer', customerSchema);

export default Customer;
