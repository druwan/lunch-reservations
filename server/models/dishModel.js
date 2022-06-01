import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  dish_id: String,
  name: { type: String, required: true },
  isVegan: Boolean,
  description: { type: String, required: true },
  image: { type: String, required: true },
  spicy: { type: Number, required: true },
});

export default mongoose.model('Dish', dishSchema);
