import express from 'express';
import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOneOrder,
  updateOrder,
} from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOneOrder);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
