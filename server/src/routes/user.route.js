import { Router } from 'express';
import {
  getAllUsers,
  updateUser,
  deleteUserById,
  getById
} from '../controllers/user.controller.js';
import { AdminPermission, isAccountOwner } from '../middlewares/index.js'

const router = Router();

// Para administradores
router.get('', AdminPermission, getAllUsers);
router.get('/:id', AdminPermission, getById);
router.delete('/:id', AdminPermission, deleteUserById);
// Para usuarios
router.get('/profile/:id', isAccountOwner, getById);
router.put('/profile/:id', isAccountOwner, updateUser);
router.delete('/profile/:id', isAccountOwner, deleteUserById);

export default router;