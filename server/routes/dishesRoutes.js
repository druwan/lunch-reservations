import express from 'express';
import {
  getDishes,
  getOneDish,
  createDish,
  updateDish,
  deleteDish,
} from '../controllers/dishesController.js';

const router = express.Router();

router.post('/', createDish);
router.get('/', getDishes);
router.get('/:id', getOneDish);
router.patch('/:id', updateDish);
router.delete('/:id', deleteDish);

export default router;
