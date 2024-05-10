import db from "../models";

export default class AppointmentRepository {
  async createAppointment(appointment) {
    return db.Appointment.create(appointment);
  }

  async getAppointments() {
    return db.Appointment.findAll();
  }

  async getAppointmentById(id) {
    return db.Appointment.findByPk(id);
  }

  async updateAppointment(id, appointment) {
    return db.Appointment.update(appointment, {
      where: { id: id }
    });
  }

  async deleteAppointment(id) {
    return db.Appointment.destroy({
      where: { id: id }
    });
  }
}