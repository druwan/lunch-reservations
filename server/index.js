import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
// import auth from './middlewares/auth.js';
// import { expressjwt } from 'express-jwt';
// import jwks from 'jwks-rsa';

import customerRoutes from './routes/customersRoutes.js';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
// app.use(auth);
app.use('/customers', customerRoutes);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('Connected to DB');
  } catch (error) {
    console.log('Error connecting to DB' + error);
  }
};

// const jwtCheck = expressjwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://karapincha.eu.auth0.com/.well-known/jwks.json',
//   }),
//   audience: 'https://www.lunch-reservations-api.com',
//   issuer: 'https://karapincha.eu.auth0.com/',
//   algorithms: ['RS256'],
// });

// app.use(jwtCheck);

// app.get('/authorized', (req, res) => {
//   res.json({ message: 'Reservation1' });
// });

app.listen(port, () => {
  dbConnect();
  console.log(`Server running on port ${port}`);
});
