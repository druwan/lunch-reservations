import express from 'express';
import { getCustomers, logIn } from '../controllers/customerController.js';

const router = express.Router();

router.post('/login', logIn);
router.get('/customers', getCustomers);

export default router;
