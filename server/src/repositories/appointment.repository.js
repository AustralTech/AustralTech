import Appointment from "../models/appointment.js";

export default class AppointmentRepository {
  async createAppointment(appointment) {
    return Appointment.create(appointment);
  }

  async getAppointments() {
    return Appointment.findAll();
  }

  async getAppointmentById(id) {
    return Appointment.findByPk(id);
  }

  async updateAppointment(id, appointment) {
    return Appointment.update(appointment, {
      where: { id: id }
    });
  }

  async deleteAppointment(id) {
    return Appointment.destroy({
      where: { id: id }
    });
  }
}