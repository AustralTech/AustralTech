import Doctor from '../models/doctor.js';

const findallDoctors = async () => {
    try{
        const doctors = await Doctor.findAll(
            {where: {is_active: true}}
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

const createDoctor= async (doctorData) => {
    try {
        const newDoctor = await Doctor.create(doctorData);
        return newDoctor;
    } catch (error) {
      console.error("Error en el repositorio al crear doctor:", error);
      throw new Error("Error al crear doctor");
    }
};

const updateDoctor = async (id, doctor) => {
    try {
        const doctorToUpdate = await Doctor.findByPk(id);
        if (doctorToUpdate) {
            await doctorToUpdate.update(doctor);
            return doctorToUpdate;
        }
        return null;
    } catch (error) {
      console.error("Error en el repositorio al actualizar doctor:", error);
      throw new Error("Error al actualizar doctor");
    }
};

const deleteDoctor = async (id) => {
    try {
        const doctorToDelete = await Doctor.destroy(
            {where: {id: id}}
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
    createDoctor,
    updateDoctor,
    deleteDoctor
};