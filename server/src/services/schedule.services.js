import ScheduleRepository from "../repositories/schedule.repository.js";
import BaseError from "../errors/baseError.js";

const scheduleRepository = new ScheduleRepository();

const createSchedule = async (scheduleData) => {
  return scheduleRepository.createSchedule(scheduleData);
};

const getSchedules = async () => {
  const schedules = scheduleRepository.getSchedules();
  if (!schedules) {
    throw BaseError(404, "No schedules found");
  }
  return schedules;
};

const getScheduleById = async (id) => {
  const schedule = scheduleRepository.getScheduleById(id);
  if (!schedule) {
    throw BaseError(404, `Schedule with id ${id} not found`);
  }
  return schedule;
};

const updateSchedule = async (id, scheduleData) => {
  const schedule = await scheduleRepository.getScheduleById(id);
  if (!schedule) {
    throw BaseError(404, `Schedule with id ${id} not found`);
  }
  return scheduleRepository.updateSchedule(id, scheduleData);
};

const deleteSchedule = async (id) => {
  const schedule = await scheduleRepository.getScheduleById(id);
  if (!schedule) {
    throw BaseError(404, `Schedule with id ${id} not found`);
  }
  return scheduleRepository.deleteSchedule(id);
};

export const scheduleService = {
  createSchedule,
  getSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
};