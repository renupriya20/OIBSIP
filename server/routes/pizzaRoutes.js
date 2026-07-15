import express from 'express';

// Initialize Express Router
const router = express.Router();

// Import Middlewares
import { protect, admin } from '../middlewares/authMiddlewares.js';

// Import Controllers
import {
  getAllPizzas,
  getPizzaById,
  createPizza,
  updatePizzaById,
  deletePizzaById,
} from '../controllers/pizzaControllers.js';

// Initialize Routes

// Public Routes
router.route('/').get(getAllPizzas);
router.get('/:id', getPizzaById);

// Private Routes
router.post('/', protect, createPizza);

// Admin + Private Routes
router
  .route('/:id')
  .put(protect, admin, updatePizzaById)
  .delete(protect, admin, deletePizzaById);

// Export Router
export default router;
