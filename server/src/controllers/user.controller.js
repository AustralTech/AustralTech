import { userService } from '../services/user.services.js';

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAll();
    if (users.length === 0) {
      return res.status(404).json({ message: "No se encontraron usuarios" });
    }
    res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    console.log("Datos recibidos para la actualización:", req.body);
    const updatedUser = await userService.updateUserById(req.params.id, req.body);
    console.log("Usuario actualizado:", updatedUser);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    next(error);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    await userService.deleteUserById(req.params.id);
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const user = await userService.getById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error al obtener el usuario por ID:", error);
    next(error);
  }
};

export {
  getAllUsers,
  updateUser,
  deleteUserById,
  getById
};
