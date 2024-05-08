import { Router } from 'express';
import doctorRouter from './doctor.route.js';

const router = Router();

router.use('/doctor', doctorRouter);



export default router;