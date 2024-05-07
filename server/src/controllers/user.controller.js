import { userService } from '../services/user.services.js';
import { response } from 'express';
  
const getAllUsers = async (req, res, next) => {
  try {

    // Obtener todos los usuarios utilizando el servicio correspondiente
    const users = await userService.getAll();

    if (users.length === 0) {
      return res.status(404).json({ message: 'No se encontraron usuarios' });
    }

    // Enviar la lista de usuarios como respuesta
    res.status(200).json(users);
    //print para saber si llego hasta aca
  } catch (error) {
    // Manejar cualquier error que ocurra durante la operación
    next(error);
  }
};


const createUser = async (req, res, next) => {
  try {
    // Crear un nuevo usuario utilizando el servicio correspondiente
    const newUser = await userService.create(req.body);

    // Enviar el nuevo usuario como respuesta
    res.status(201).json(newUser);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la operación
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    console.log("Datos recibidos para la actualización:", req.body);
    // Actualizar el usuario utilizando el servicio correspondiente
    const updatedUser = await userService.updateUserById(req.params.id, req.body);
    console.log("Usuario actualizado:", updatedUser);

    // Enviar el usuario actualizado como respuesta
    res.status(200).json(updatedUser);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la operación
    console.error("Error al actualizar el usuario:", error);
    next(error);
  }
};


const deleteUser = async (req, res, next) => {
  try {
    // Eliminar el usuario utilizando el servicio correspondiente
    await userService.deleteBy(req.params.id);

    // Enviar una respuesta exitosa
    res.status(200).json();
  } catch (error) {
    // Manejar cualquier error que ocurra durante la operación
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    // Obtener el usuario utilizando el servicio correspondiente
    const user = await userService.getById(req.params.id);

    // Enviar el usuario como respuesta
    res.status(200).json(user);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la operación
    next(error);
  }
};




export { getAllUsers,
          createUser,
          updateUser,
          deleteUser,
          getById
 };
