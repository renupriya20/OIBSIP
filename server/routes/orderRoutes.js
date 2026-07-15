import express from 'express';

// Initialize Express Router
const router = express.Router();

// Import Middlewares
import { protect, admin } from '../middlewares/authMiddlewares.js';

// Import Controllers
import {
  createOrder,
  createRazorpayOrder,
  getOrdersByUserId,
  getAllOrders,
  getOrderById,
  updateOrderById,
  deleteOrderById,
} from '../controllers/orderControllers.js';

// Initialize Routes

// Public Routes

// Private Routes
router.route('/').post(protect, createOrder);
router.route('/user').get(protect, getOrdersByUserId);
router.route('/checkout').post(protect, createRazorpayOrder);

// Admin + Private Routes
router.route('/').get(protect, admin, getAllOrders);
router
  .route('/:id')
  .get(protect, admin, getOrderById)
  .put(protect, admin, updateOrderById)
  .delete(protect, admin, deleteOrderById);

// Export Router
export default router;
