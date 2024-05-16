import { Router } from 'express';
import specialityRouter from "./speciality.route.js"
import doctorRouter from './doctor.route.js';

const router = Router();

router.use('/specialities', specialityRouter);
router.use('/doctor', doctorRouter);



export default router;