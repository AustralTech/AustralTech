import Schedule from "../db/models/schedule.js";

export default class ScheduleRepository {
  async createSchedule(schedule) {
    try {
      const newSchedule = await Schedule.create(schedule);
      return newSchedule;
    } catch (error) {
      console.log("Error en el repositorio al crear horario:", error);
      throw new Error('Error al crear el horario');
    }
  }

  async getSchedules() {
    try {
      const schedules = await Schedule.findAll();
      return schedules;
    } catch (error) {
      console.log("Error en el repositorio al obtener horarios:", error);
      throw new Error('Error al obtener todos los horarios');
    }
  }

  async getScheduleById(id) {
    try {
      const schedule = await Schedule.findByPk(id);
      return schedule;
    } catch (error) {
      console.log("Error en el repositorio al obtener horario por ID:", error);
      throw new Error(`Error al obtener el horario con id ${id}`);
    }
  }

  async updateSchedule(id, schedule) {
    try {
      await Schedule.update(schedule, {
        where: { id: id }
      });
      const updatedSchedule = await Schedule.findByPk(id);
      return updatedSchedule;
    } catch (error) {
      console.log("Error en el repositorio al actualizar horario:", error);
      throw new Error(`Error al actualizar el horario con id ${id}`);
    }
  }

  async deleteSchedule(id) {
    try {
      await Schedule.destroy({
        where: { id: id }
      });
    } catch (error) {
      console.log("Error en el repositorio al eliminar horario:", error);
      throw new Error(`Error al eliminar el horario con id ${id}`);
    }
  }
};
