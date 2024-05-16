import { Router } from 'express';
import {
  createSchedule,
  getSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule
} from '../controllers/schedule.controller.js';

const router = Router();

router.post('/', createSchedule);
router.get('/', getSchedules);
router.get('/:id', getScheduleById);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);

export default router;