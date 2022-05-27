import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import { jwtCheck } from './middlewares/jwtCheck.js';
import { oAuth } from './middlewares/token.js';

import Customer from './models/customerModel.js';

import customerRoutes from './routes/customersRoutes.js';
import dishesRoutes from './routes/dishesRoutes.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/customers', customerRoutes);
app.use('/api/dishes', dishesRoutes);

// app.use(oAuth);
// app.use(jwtCheck);

// app.get('/authorized', (req, res) => {
//   res.json({ message: 'Secured Resource' });
// });

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('Connected to DB');
    // testUser();
  } catch (error) {
    console.log('Error connecting to DB' + error);
  }
};

// const testUser = async () => {
//   try {
//     const user = new Customer({
//       name: 'Testy',
//       email: 'asd@email.com',
//       password: '123',
//       orders: ['asd', '123'],
//     });
//     await user.save();
//     console.log(user);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

app.listen(port, () => {
  dbConnect();
  console.log(`Server running on port ${port}`);
});
