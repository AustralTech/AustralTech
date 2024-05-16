import {Router} from 'express';
import doctorController from '../controllers/doctor.controller.js';

const router = Router();

router.get('/all', doctorController.findallDoctors);
router.get('/:id', doctorController.findDoctorById);
router.get('/specialty/:specialtyId', doctorController.findDoctorbySpeciality);
router.post('/', doctorController.createDoctor);
router.put('/:id', doctorController.updateDoctor);
router.delete('/:id', doctorController.deleteDoctor);

export default router;