import Specialities from "../db/models/specialities.js";

const createSpeciality = async (specialityData) => {
  try {
    const newSpeciality = await Specialities.create(specialityData);
    return newSpeciality;
  } catch (error) {
    console.error("Error en el repositorio al crear especialidad:", error);
    throw new Error("Error al crear especialidad");
  }
};

const getAllSpeciality = async () => {
  try {
    const specialities = await Specialities.findAll();
    return specialities;
  } catch (error) {
    console.error("Error en el repositorio al obtener especialidades:", error);
    throw new Error("Error al obtener especialidades");
  }
};

const getSpecialityById = async (id) => {
  try {
    const speciality = await Specialities.findByPk(id);
    return speciality;
  } catch (error) {
    console.error("Error en el repositorio al obtener especialidad por ID:", error);
    throw new Error("Error al obtener especialidad por ID");
  }
};

const getSpecialityByName = async (name) => {
  try {
    const speciality = await Specialities.findOne({ where: { name } });
    return speciality;
  } catch (error) {
    console.error('Error al obtener especialidad por nombre:', error);
    throw new Error('Error al obtener especialidad por nombre');
  }
};

const updateSpeciality = async (id, name, description) => {
  try {
    const [rowsUpdated, [updatedSpeciality]] = await Specialities.update({ name, description }, {
      where: { id },
      returning: true
    })
    if (rowsUpdated === 0) {
      throw new Error('Especialidad no encontrada');
    }
    return updatedSpeciality;
  } catch (error) {
    console.error("Error en el repositorio al actualizar especialidad:", error);
    throw new Error("Error al actualizar especialidad");
  }
};

const deleteSpeciality = async (id) => {
  try {
    await Specialities.destroy({
      where: { id }
    })
  } catch (error) {
    console.error("Error en el repositorio al eliminar especialidad:", error);
    throw new Error("Error al eliminar especialidad");
  }
};

export const specialityRepository = {
  createSpeciality,
  getAllSpeciality,
  getSpecialityById,
  getSpecialityByName,
  updateSpeciality,
  deleteSpeciality,
};