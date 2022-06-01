import Dish from '../models/dishModel.js';

export const createDish = async (req, res) => {
  try {
    const ifExist = await Dish.findOne({ name: req.body.name }).exec();
    if (ifExist) {
      return res.status(409).json({ message: 'dish already exists' });
    }

    const newDish = await Dish.create({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      spicy: req.body.spicy,
    });

    newDish.save();
    res.status(200).send(`Successfully created new dish ${newDish.name}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDishes = async (req, res) => {
  try {
    const dishConfig = await Dish.find();
    res.status(200).json(dishConfig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneDish = async (req, res) => {
  const dish_id = req.params.id;
  try {
    const dish = await Dish.findById(dish_id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDish = async (req, res) => {
  const dish_id = req.params.id;
  try {
    Dish.findByIdAndUpdate(
      dish_id,
      { $set: req.body },
      { new: true },
      (err, result) => {
        if (err) {
          res.status(500).json({ message: error.message });
        }
        res.status(200).json(result);
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDish = async (req, res) => {
  const dish_id = req.params.id;
  try {
    const dishToDelete = await Dish.findByIdAndDelete(dish_id);
    res.status(200).send(`Successfully deleted dish ${dishToDelete.name}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
