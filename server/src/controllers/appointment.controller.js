import { appointmentService } from "../services/appointment.services.js";

const createAppointment = async (req, res, next) => {
  try {
    const response = await appointmentService.createAppointment(req.body);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const getAppointments = async (req, res, next) => {
  try {
    const response = await appointmentService.getAppointments();
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const getAppointmentById = async (req, res, next) => {
  try {
    const response = await appointmentService.getAppointmentById(req.params.id);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const updateAppointment = async (req, res, next) => {
  try {
    const response = await appointmentService.updateAppointment(req.params.id, req.body);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const deleteAppointment = async (req, res, next) => {
  try {
    await appointmentService.deleteAppointment(req.params.id);
    res.status(200).json({ success: true, message: "Appointment deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
};