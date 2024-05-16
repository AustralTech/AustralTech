import { Router } from 'express';
import specialityRouter from "./speciality.route.js"

const router = Router();

router.use('/specialities', specialityRouter);

export default router;