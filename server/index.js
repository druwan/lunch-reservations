import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import { jwtCheck } from './middlewares/jwtCheck.js';
import { oAuth } from './middlewares/token.js';

import customerRoutes from './routes/customersRoutes.js';
import dishesRoutes from './routes/dishesRoutes.js';
import orderRoutes from './routes/ordersRoutes.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api/customers', customerRoutes);
app.use('/api/dishes', dishesRoutes);
app.use('/api/orders', orderRoutes);

app.use(oAuth);
app.use(jwtCheck);

app.get('/protected', jwtCheck, (req, res) => {
  res.json({ message: 'Secured Resource' });
});

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('Connected to DB');
    // testUser();
  } catch (error) {
    console.log('Error connecting to DB' + error);
  }
};

app.listen(port, () => {
  dbConnect();
  console.log(`Server running on port ${port}`);
});
