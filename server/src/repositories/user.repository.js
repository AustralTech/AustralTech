import User from "../db/models/user.js";

const getAll = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.log("Error en el repositorio al obtener usuarios:", error);
    throw new Error('Error al obtener todos los usuarios');
  }
};

const getById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    console.log("Error en el repositorio al obtener horario por ID:", error);
    throw new Error(`Error al obtener el usuario con id ${id}`);
  }
};

const updateUserById = async (id, userData) => {
  try {
    const [rowsUpdated, [updatedUser]] = await User.update(userData, {
      where: { id: id },
      returning: true,
    });
    if (rowsUpdated === 0) {
      throw new Error('Usuario no encontrado');
    }
    return updatedUser;
  } catch (error) {
    console.log("Error en el repositorio al actualizar usuario:", error);
    throw new Error(`'Error al actualizar el usuario con id ${id}`);
  }
};

const deleteUserById = async (id) => {
  console.log("llegue al repo")
  try {
    console.log("e")
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    await User.destroy({
      where: {
        id: id
      },
    });
    console.log("Hola")
  } catch (error) {
    console.log("Error en el repositorio al eliminar usuario:", error);
    throw new Error(`Error al eliminar el usuario con id ${id}`)
  }
};

const checkIfExist = async (key, value) => {
  const response = await User.count({
    where: {
      [key]: value
    }
  })
  return response == 1;
};

const getAdminUser = async () => {
  try {
    const user = await User.findOne({
      where: {
        isAdmin: true
      }
    });
    return user;
  } catch (error) {
    console.log("Error en el repositorio al obtener usuario administrador:", error);
    throw new Error("Error al obtener el usuario administrador");
  }
};

export const userRepository = {
  getAll,
  getById,
  updateUserById,
  deleteUserById,
  checkIfExist,
  getAdminUser
};