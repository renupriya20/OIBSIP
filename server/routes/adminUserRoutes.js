import express from 'express';

// Initialize Express Router
const router = express.Router();

// Import Middlewares
import { protect, admin } from '../middlewares/authMiddlewares.js';

// Import Controllers
import {
  authAdmin,
  registerAdmin,
  getAdminProfile,
  updateAdminProfile,
  getAllAdmins,
  getAdminById,
  updateAdminById,
  deleteAdminById,
} from '../controllers/adminUserControllers.js';

// Initialize Routes

// Public Routes
router.post('/login', authAdmin);
router.post('/register', registerAdmin);

// Private Routes
router
  .route('/profile')
  .get(protect, getAdminProfile)
  .put(protect, updateAdminProfile);

// Admin + Private Routes
router.get('/', protect, admin, getAllAdmins);
router
  .route('/:id')
  .get(protect, admin, getAdminById)
  .put(protect, admin, updateAdminById)
  .delete(protect, admin, deleteAdminById);

// Export Router
export default router;
