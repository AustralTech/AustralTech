import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  updateUser,
  deleteUserById,
  getById
} from '../controllers/user.controller.js';

const router = Router();

router.get('/all', getAllUsers);
router.get('/:id', getById);
// router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUserById);

export default router;
