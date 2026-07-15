import express from 'express';

// Initialize Express Router
const router = express.Router();

// Import Middlewares
import { protect, admin } from '../middlewares/authMiddlewares.js';

// Import Controllers
import {
  authUser,
  registerUser,
  verifyUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/userControllers.js';

// Initialize Routes

// Public Routes
router.post('/login', authUser);
router.post('/register', registerUser);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword', resetPassword);

// Private Routes
router.post('/verify', protect, verifyUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Admin + Private Routes
router.get('/', protect, admin, getAllUsers);
router
  .route('/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUserById)
  .delete(protect, admin, deleteUserById);

// Export Router
export default router;
