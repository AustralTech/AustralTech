import { Router } from 'express';
import authRouter from './auth.route.js';
import userRouter from "./user.route.js";
import specialityRouter from "./speciality.route.js";
import doctorRouter from "./doctor.route.js";
import appointmentRouter from './appointment.route.js';
import scheduleRouter from './schedule.route.js';

const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/appointments', appointmentRouter);
router.use('/schedules', scheduleRouter);
router.use('/specialities', specialityRouter);
router.use('/doctor', doctorRouter);

export default router;