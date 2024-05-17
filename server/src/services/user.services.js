import { userRepository } from "../repositories/user.repository.js";

const getAll = async () => {
  try {
    const users = await userRepository.getAll();
    return users;
  } catch (error) {
    throw new Error('Error al obtener todos los usuarios');
  }
};

const getById = async (id) => {
  const user = await userRepository.getById(id)
  if (!user) {
    throw new Error(`User doesn't exist with id ${id}`)
  }
  return user;
};

const updateUserById = async (id, userData) => {
  try {
    const user = await userRepository.getById(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const updatedUser = await user.update(userData);
    return updatedUser;
  } catch (error) {
    throw new Error('Error al actualizar el usuario');
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await userRepository.getById(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    const updatedUser = await user.deleteUserById(id);
    return updatedUser;
  } catch (error) {
    throw new Error('Error al eliminar el usuario');
  }
};

const createUser = async (userData) => {
  try {
    const emailExist = await userRepository.checkIfExist("email", userData.email);
    if (emailExist) {
      throw new Error("An user with email '" + userData.email + "' already exists.");
    }

    const dniExist = await userRepository.checkIfExist("DNI", userData.dni);
    if (dniExist) {
      throw new Error("An user with DNI '" + userData.dni + "' already exists.");
    }

    const newUser = await userRepository.createUser(userData);
    return newUser;
  } catch (error) {
    throw new Error('Error al crear el usuario: ' + error.message);
  }
};

export const userService = {
  getAll,
  getById,
  updateUserById,
  deleteUserById,
  createUser
};



