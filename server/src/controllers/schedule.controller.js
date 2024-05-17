import { scheduleService } from "../services/schedule.services.js"

const createSchedule = async (req, res, next) => {
  try {
    const response = await scheduleService.createSchedule(req.body);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const getSchedules = async (req, res, next) => {
  try {
    const response = await scheduleService.getSchedules();
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const getScheduleById = async (req, res, next) => {
  try {
    const response = await scheduleService.getScheduleById(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const updateSchedule = async (req, res, next) => {
  try {
    const response = await scheduleService.updateSchedule(req.params.id, req.body);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const deleteSchedule = async (req, res, next) => {
  try {
    await scheduleService.deleteSchedule(req.params.id);
    res.status(200).json({ success: true, message: "Schedule deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export {
  createSchedule,
  getSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule
};
