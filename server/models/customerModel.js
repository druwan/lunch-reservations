import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  customer_id: String,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  orders: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Order',
    },
  ],
});

export default mongoose.model('Customer', customerSchema);
