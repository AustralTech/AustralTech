import AppointmentRepository from "../repositories/appointment.repository.js";
import BaseError from "../errors/baseError.js";

const appointmentRepository = new AppointmentRepository();

const createAppointment = async (appointmentData) => {
  return appointmentRepository.createAppointment(appointmentData);
};

const getAppointments = async () => {
  const appointments = appointmentRepository.getAppointments();
  if (!appointments) {
    throw BaseError(404, "No appointments found");
  }
  return appointments;
};

const getAppointmentById = async (id) => {
  const appointment = appointmentRepository.getAppointmentById(id);
  if (!appointment) {
    throw BaseError(404, `Appointment with id ${id} not found`);
  }
  return appointment;
};

const updateAppointment = async (id, appointmentData) => {
  const appointment = await appointmentRepository.getAppointmentById(id);
  if (!appointment) {
    throw BaseError(404, `Appointment with id ${id} not found`);
  }
  return appointmentRepository.updateAppointment(id, appointmentData);
};

const deleteAppointment = async (id) => {
  const appointment = await appointmentRepository.getAppointmentById(id);
  if (!appointment) {
    throw BaseError(404, `Appointment with id ${id} not found`);
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