import AppointmentRepository from "../repositories/appointment.repository.js";
import BaseError from "../errors/baseError.js";

const appointmentRepository = new AppointmentRepository();

const createAppointment = async (appointmentData) => {
  try {
    const appointment = await appointmentRepository.createAppointment(appointmentData);
    return appointment;
  } catch (error) {
    throw BaseError(400, "Error en el servicio. No se pudo crear el turno");
  }
};

const getAppointments = async () => {
  try {
    const appointments = await appointmentRepository.getAppointments();
    return appointments;
  } catch (error) {
    throw BaseError(404, "Error en el servicio. No se pudieron obtener los turnos");
  }
};

const getAppointmentById = async (id) => {
  const appointment = appointmentRepository.getAppointmentById(id);
  if (!appointment) {
    throw BaseError(404, `Error en el servicio. Turno con ${id} no encontrado`);
  }
  return appointment;
};

const updateAppointment = async (id, appointmentData) => {
  const appointment = await appointmentRepository.getAppointmentById(id);
  if (!appointment) {
    throw BaseError(404, `Error en el servicio. Turno con ${id} no encontrado`);
  }
  return appointmentRepository.updateAppointment(id, appointmentData);
};

const deleteAppointment = async (id) => {
  const appointment = await appointmentRepository.getAppointmentById(id);
  if (!appointment) {
    throw BaseError(404, `Error en el servicio. Turno con ${id} no encontrado`);
  }
  return appointmentRepository.deleteAppointment(id);
};

export const appointmentService = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};