import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import { getToken, checkJwt, checkScopes } from './middlewares/auth.js';

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

// This route doesn't need authentication
app.get('/api/public', (req, res) => {
  res.json({
    message: `Hello from a public endpoint! You don't need to be authenticated to see this.`,
  });
});

// This route needs authentication
app.get('/api/protected', checkJwt, (req, res) => {
  try {
    res.status(200).json({
      message:
        'Hello from a private endpoint! You need to be authenticated to see this.',
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
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
