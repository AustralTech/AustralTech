import { Router } from 'express';



import appointmentRouter from './appointment.route.js';
import scheduleRouter from './schedule.route.js';

const router = Router();




router.use('/appointments', appointmentRouter);
router.use('/schedules', scheduleRouter);

export default router;