import { Router } from 'express';
import { getAllUsers, createUser, updateUser, deleteUser, getById } from '../controllers/user.controller.js';

const router = Router();

// Define la ruta para obtener todos los usuarios
router.get('/all', getAllUsers);



router.get('/:id', getById);


// Define las demás rutas CRUD
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
    