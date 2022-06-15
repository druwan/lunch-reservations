import Order from '../models/orderModel.js';

export const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create({
      fulfilled: req.body.fulfilled,
    });
    newOrder.save();
    res.status(200).send(`Successfully placed a new order`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const getAllOrders = await Order.find();
    res.status(200).json(getAllOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneOrder = async (req, res) => {
  const order_id = req.params.id;
  try {
    const order = await Order.findById(order_id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  const order_id = req.params.id;
  try {
    Order.findByIdAndUpdate(
      order_id,
      {
        $set: req.body,
      },
      { new: true },
      (err, result) => {
        if (err) {
          res.status(500).json({ message: err.message });
        }
        res.status(200).json(result);
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  const order_id = req.params.id;
  try {
    const orderToDelete = await Order.findByIdAndDelete(order_id);
    res.status(200).send(`Successfully deleted order ${orderToDelete._id}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
