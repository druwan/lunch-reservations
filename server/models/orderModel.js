import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  order_id: String,
  orderDate: { type: Date, default: new Date() },
  dishes: [mongoose.SchemaTypes.String],
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
