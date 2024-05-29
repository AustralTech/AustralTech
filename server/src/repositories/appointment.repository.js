import Appointment from "../db/models/appointment.js";

export default class AppointmentRepository {
  async createAppointment(appointment) {
    try {
      const newAppointment = await Appointment.create(appointment);
      return newAppointment;
    } catch (error) {
      console.log("Error en el repositorio al crear turno:", error);
      throw new Error('Error al crear el turno');
    }
  }

  async getAppointments() {
    try {
      const appointments = await Appointment.findAll(
        { where: { isActive: true } }
      );
      return appointments;
    } catch (error) {
      console.log("Error en el repositorio al obtener turnos:", error);
      throw new Error('Error al obtener todos los turnos');
    }
  }

  async getAppointmentById(id) {
    try {
      const appointment = await Appointment.findByPk(id);
      return appointment;
    } catch (error) {
      console.log("Error en el repositorio al obtener turno por ID:", error);
      throw new Error(`Error al obtener el turno con id ${id}`);
    }
  }

  async updateAppointment(id, appointment) {
    try {
      await Appointment.update(appointment, {
        where: { id: id }
      });
      const updatedAppointment = await Appointment.findByPk(id);
      return updatedAppointment;
    } catch (error) {
      console.log("Error en el repositorio al actualizar turno:", error);
      throw new Error(`Error al actualizar el turno con id ${id}`);
    }
  }

  async deleteAppointment(id) {
    try {
      await Appointment.update({ isActive: false }, {
        where: { id: id }
      });
    } catch (error) {
      console.log("Error en el repositorio al eliminar turno:", error);
      throw new Error(`Error al eliminar el turno con id ${id}`);
    }
  }
};