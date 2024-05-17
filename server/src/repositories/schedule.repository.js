import Schedule from "../models/schedule.js";

export default class ScheduleRepository {
  async createSchedule(schedule) {
    return Schedule.create(schedule);
  }

  async getSchedules() {
    return Schedule.findAll();
  }

  async getScheduleById(id) {
    return Schedule.findByPk(id);
  }

  async updateSchedule(id, schedule) {
    return Schedule.update(schedule, {
      where: { id: id }
    });
  }

  async deleteSchedule(id) {
    return Schedule.destroy({
      where: { id: id }
    });
  }
}
