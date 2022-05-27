import express from 'express';
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getOneCustomer,
  logIn,
} from '../controllers/customerController.js';

const router = express.Router();

router.post('/login', logIn);
router.post('/', createCustomer);
router.get('/', getAllCustomers);
router.get('/:id', getOneCustomer);
router.delete('/:id', deleteCustomer);

export default router;
