import Doctor from '../db/models/doctor.js';
import Speciality from '../db/models/specialities.js';

const findallDoctors = async () => {
  try {
    const doctors = await Doctor.findAll(
      { where: { is_active: true } }
    );
    return doctors;
  }
  catch (error) {
    console.error("Error en el repositorio al obtener doctores:", error);
    throw new Error("Error al obtener doctores");
  };
};

const findDoctorbyid = async (doctorId) => {
  try {
    const doctor = await Doctor.findByPk(doctorId);
    return doctor;
  } catch (error) {
    console.error("Error en el repositorio al obtener doctor por ID:", error);
    throw new Error("Error al obtener doctor por ID");
  }
};

const findDoctorbySpeciality = async (specialtyId) => {
  try {
    const doctors = await Doctor.findAll({
      include: 'specialties',
      where: {
        '$specialties.id$': specialtyId
      }
    });
    return doctors;
  } catch (error) {
    console.error("Error en el repositorio al obtener doctor por especialidad:", error);
    throw new Error("Error al obtener doctor por especialidad");
  }
}

const checkLicence = async (licence) => {
  try {
    const count = await Doctor.count(
      { where: { licence: licence } }
    );
    return count;
  } catch (error) {
    console.error("Error en el repositorio al verificar numero de licencia del doctor: ", error);
    throw new Error("Error al obtener doctor por licencia");
  }
}

const checkEmail = async (email) => {
  try {
    const count = await Doctor.count(
      { where: { email: email } }
    );
    return count;
  } catch (error) {
    console.error("Error en el repositorio al verificar email del doctor:", error);
    throw new Error("Error al obtener doctor por email");
  }
}

const findDoctorsSpecialities = async (id) => {
  try {
    const doctor = await Doctor.findByPk(id, { include: Speciality });
    if (!doctor) {
      throw new Error('Doctor not found');
    }
    return doctor.Specialities;
  } catch (error) {
    console.error("Error en el repositorio al obtener especialidades del doctor:", error);
    throw new Error("Error al obtener especialidades del doctor");
  }
};

const createDoctor = async (doctorData) => {
  try {
    const newDoctor = await Doctor.create(doctorData);
    return newDoctor;
  } catch (error) {
    console.error("Error en el repositorio al crear doctor:", error);
    throw new Error("Error al crear doctor");
  }
};

const updateDoctor = async (id, doctorData) => {
  try {
    await Doctor.update(doctorData, { where: { id: id } });
    return await Doctor.findByPk(id); // Return the updated doctor
  } catch (error) {
    console.error("Error en el repositorio al actualizar doctor:", error);
    throw new Error("Error al actualizar doctor");
  }
};

const addSpeciality = async (doctorId, specialityId) => {
  try {
    const doctor = await Doctor.findByPk(doctorId);
    if (!doctor) {
      throw new Error(`Doctor with ID ${doctorId} not found`);
    }
    const speciality = await Speciality.findByPk(specialityId);
    if (!speciality) {
      throw new Error('Speciality not found');
    }
    await doctor.addSpeciality(speciality);
    return doctor;
  } catch (error) {
    console.error("Error en el repositorio al agregar especialidad al doctor:", error);
    throw new Error("Error al agregar especialidad al doctor");
  }
};

const deleteDoctor = async (id) => {
  try {
    const doctorToDelete = await Doctor.destroy(
      { where: { id: id } }
    );
    return doctorToDelete;
  } catch (error) {
    console.error("Error en el repositorio al eliminar doctor:", error);
    throw new Error("Error al eliminar doctor");
  }
};

export const doctorRepository = {
  findallDoctors,
  findDoctorbyid,
  findDoctorbySpeciality,
  checkLicence,
  checkEmail,
  findDoctorsSpecialities,
  createDoctor,
  updateDoctor,
  addSpeciality,
  deleteDoctor
};
