import { userRepository } from "../repositories/user.repository.js";
import customError from "../middlewares/customError.js";

const getAll = async () => {
  try {
    const users = await userRepository.getAll();
    return users;
  } catch (error) {
    console.log("Error en el servicio al obtener usuarios:", error);
    throw error;
  }
};

const getById = async (id) => {
  try {
    const user = await userRepository.getById(id);
    if (!user) {
      throw customError(404, `Usuario con id ${id} no encontrado`);
    }
    return user;
  } catch (error) {
    console.log("Error en el servicio al obtener usuario por ID:", error);
    throw error;
  }
};

const updateUserById = async (id, userData) => {
  try {
    const user = await userRepository.getById(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    if ('isAdmin' in userData) {
      throw customError(400, "No está permitido actualizar el atributo 'isAdmin'");
    }
    const updatedUser = await user.update(userData);
    return updatedUser;
  } catch (error) {
    console.log("Error en el servicio al actualizar usuario:", error);
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await userRepository.getById(id);
    if (!user) {
      throw customError(404, `Usuario con id ${id} no encontrado`);
    }
    if (user.isAdmin) {
      throw customError(400, "No está permitido eliminar un usuario administrador");
    }
    await userRepository.deleteUserById(id);
  } catch (error) {
    console.log("Error en el servicio al eliminar usuario:", error);
    throw error;
  }
};

const getAdminUser = async () => {
  try {
    const adminUser = await userRepository.getAdminUser();
    return adminUser;
  } catch (error) {
    console.log("Error en el servicio al obtener usuario administrador:", error);
    throw error;
  }
};

export const userService = {
  getAll,
  getById,
  updateUserById,
  deleteUserById,
  getAdminUser
};



