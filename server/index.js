import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log('Connected to DB');
  } catch (error) {
    console.log('Error connecting to DB' + error);
  }
};

const port = process.env.PORT || 3001;
app.listen(port, () => {
  dbConnect();
  console.log(`Server running on port ${port}`);
});
