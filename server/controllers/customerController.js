import Customer from '../models/customerModel.js';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingCustomer = await Customer.findOne({ email });
    if (!existingCustomer) {
      return res.status(404).json({ message: `User does not exist` });
    }

    const correctPassword = await bcryptjs.compare(
      password,
      existingCustomer.password
    );
    if (!correctPassword) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { email: existingCustomer.email, id: existingCustomer._id },
      'test',
      { expiresIn: '1h' }
    );
    res.status(200).json({ result: existingCustomer, token });
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;
  try {
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json({ message: 'Customer already exist' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords does not match' });
    }

    const hashedPassword = await bcryptjs.hash(password, 12);

    const newCustomer = await Customer.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: newCustomer.email, id: newCustomer._id },
      'test',
      { expiresIn: '1h' }
    );

    res.status(200).json({ newCustomer: newCustomer, token });
  } catch (error) {
    console.log(error);
  }
};

export const getCustomers = async (req, res) => {
  try {
    const customerConfig = await customer.find();
    res.status(200).json(customerConfig);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
