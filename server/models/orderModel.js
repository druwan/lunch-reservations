import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  id: { type: String, required: true },
  orderDate: { type: Date, default: new Date() },
  dishes: [{ type: String, required: true }],
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
