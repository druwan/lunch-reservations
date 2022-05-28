import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  dish_id: String,
  name: { type: String, required: true },
  isVegan: Boolean,
  image: { type: String, required: true },
  spicy: { type: Number, required: true },
});

export default mongoose.model('Dish', dishSchema);
