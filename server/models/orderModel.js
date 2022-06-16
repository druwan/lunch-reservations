import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  order_id: String,
  orderDate: { type: Date, default: new Date() },
  dishes: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'Dish',
  },
  fulfilled: {
    type: Boolean,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
