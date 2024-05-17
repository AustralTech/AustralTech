import doctorServices from "../services/doctor.services.js";

const findallDoctors = async (req, res) => {
  try {
    const doctors = await doctorServices.findallDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error en el controlador al obtener doctores:", error);
    res.status(500).json({ message: error.message });
  }
};

const findDoctorById = async (req, res) => {
  try {
    const doctor = await doctorServices.findDoctorById(req.params.id);
    res.status(200).json(doctor);
  } catch (error) {
    console.error("Error en el controlador al obtener doctor por ID:", error);
    res.status(500).json({ message: error.message });
  }
};

const findDoctorbySpeciality = async (req, res) => {
  try {
    const doctors = await doctorServices.findDoctorbySpeciality(req.params.specialtyId);
    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error en el controlador al obtener doctor por especialidad:", error);
    res.status(500).json({ message: error.message });
  }
};

const createDoctor = async (req, res) => {
  try {
    const newDoctor = await doctorServices.createDoctor(req.body);
    res.status(201).json(newDoctor);
  } catch (error) {
    console.error("Error en el controlador al crear doctor:", error);
    res.status(500).json({ message: error.message });
  }
};

const updateDoctor = async (req, res) => {
  try {
    const doctorToUpdate = await doctorServices.updateDoctor(req.params.id, req.body);
    res.status(200).json(doctorToUpdate);
  } catch (error) {
    console.error("Error en el controlador al actualizar doctor:", error);
    res.status(500).json({ message: error.message });
  }
};

const deleteDoctor = async (req, res) => {
  try {
    const doctorToDelete = await doctorServices.deleteDoctor(req.params.id);
    res.status(200).json(doctorToDelete);
  } catch (error) {
    console.error("Error en el controlador al eliminar doctor:", error);
    res.status(500).json({ message: error.message });
  }
};

export default {
  findallDoctors,
  findDoctorById,
  findDoctorbySpeciality,
  createDoctor,
  updateDoctor,
  deleteDoctor
};

