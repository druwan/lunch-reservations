import Dish from '../models/dishModel.js';

export const getDishes = async (req, res) => {
  try {
    const dishConfig = await Dish.find();
    res.status(200).json(dishConfig);
  } catch (error) {
    res.status(500).json({ message: 'Could not get dishes: ' + error });
  }
};
