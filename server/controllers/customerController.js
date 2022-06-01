import Customer from '../models/customerModel.js';

export const createCustomer = async (req, res) => {
  try {
    // check if customer email already exist
    const ifExist = await Customer.findOne({ email: req.body.email }).exec();
    if (ifExist) {
      return res.status(409).json({ message: 'email already exist' });
    }

    const newCustomer = await Customer.create({
      name: req.body.name,
      email: req.body.email,
    });

    res
      .status(200)
      .send(`Successfully created new customer ${newCustomer.name}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customerConfig = await Customer.find();
    res.status(200).json(customerConfig);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getOneCustomer = async (req, res) => {
  const customer_id = req.params.id;
  try {
    const customer = await Customer.findById(customer_id);
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  const customer_id = req.params.id;
  try {
    Customer.findByIdAndUpdate(
      customer_id,
      {
        $set: req.body,
      },
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

export const deleteCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    const customerToDelete = await Customer.findByIdAndDelete(id);
    res
      .status(200)
      .send(`Successfully deleted customer ${customerToDelete.name}`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
