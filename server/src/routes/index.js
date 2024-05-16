import { Router } from 'express';
import doctorRouter from './doctor.route.js';
import userRouter from './user.route.js';

const router = Router();

router.use('/doctor', doctorRouter);
router.use('/users', userRouter); 


export default router;