import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  customer_id: String,
  name: { type: String, required: true },
  email: { type: String, required: true },
  orders: [mongoose.SchemaTypes.String],
});

export default mongoose.model('Customer', customerSchema);
