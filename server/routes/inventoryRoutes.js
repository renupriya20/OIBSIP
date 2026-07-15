import express from 'express';

// Initialize Express Router
const router = express.Router();

// Import Middlewares
import { protect, admin } from '../middlewares/authMiddlewares.js';

// Import Controllers
import {
  getAllStocks,
  getStockById,
  createStock,
  updateStockById,
  deleteStockById,
} from '../controllers/inventoryControllers.js';

// Initialize Routes

// Public Routes

// Private Routes
router.get('/', protect, getAllStocks);
router.get('/:id', protect, getStockById);

// Admin + Private Routes
router.post('/', protect, admin, createStock);
router
  .route('/:id')
  .put(protect, admin, updateStockById)
  .delete(protect, admin, deleteStockById);

// Export Router
export default router;
