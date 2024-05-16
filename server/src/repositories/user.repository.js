import User from "../models/user.js";


//crear un usuario: Define una función en el repositorio que reciba como parámetro los datos de un nuevo usuario
// y que utilice consultas SQL para almacenar el nuevo usuario en la base de datos.

const createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        throw new Error('Error al crear el usuario');
    }
};


//Obtener todos los usuarios (solo para administradores): Define una función en el repositorio que
// permita recuperar todos los perfiles de pacientes almacenados en la base de datos.
// Asegúrate de manejar adecuadamente cualquier error que pueda ocurrir durante estas operaciones y
// de utilizar las mejores prácticas de seguridad al interactuar con la base de datos

const getAll = async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.log('Error al ejecutar User.findAll():', error);
      throw new Error('Error al obtener todos los usuarios');
    }
  }
  

// Obtener usuario: Define una función en el repositorio que reciba como parámetro el ID del paciente
// y que utilice consultas SQL para recuperar los datos del paciente desde la base de datos.

const getById = async (id) => {
    try {
        const user = await User.findByPk(id);
        return user;
    } catch (error) {
        throw new Error('Error al obtener el usuario  ');
    }
    }

// Actualizar perfil de paciente: Define una función en el repositorio que reciba como parámetro el ID del paciente y
// los datos actualizados del perfil,
// y que utilice consultas SQL para actualizar el perfil del paciente en la base de datos.

const updateUserById = async (id, userData) => {
    try {
        // Actualizar el usuario con los datos proporcionados
        const [rowsUpdated, [updatedUser]] = await User.update(userData, {
            where: { id: id }, // Especifica la condición para actualizar el usuario con el ID proporcionado
            returning: true, // Devuelve el registro actualizado
        });
        
        // Verifica si se actualizó algún registro
        if (rowsUpdated === 0) {
            throw new Error('Usuario no encontrado');
        }
        
        // Devolver el usuario actualizado
        return updatedUser;
    } catch (error) {
        throw new Error('Error al actualizar el usuario');
    }
};



//Eliminar perfil de paciente: Define una función en el repositorio que reciba como parámetro el ID del paciente y
// que utilice consultas SQL para eliminar el perfil del paciente de la base de datos. 
//El borrado debe ser lógico, es decir, cambiar el atributo isActive a false.

const deleteUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }
        const updatedUser = await User.destroy({
            where: {
              id: id
            },
          });
        return updatedUser;
    } catch (error) {
        throw new Error('Error al eliminar el usuario');
    }
}

//chequear si existe en la base de dato ese usuario
const checkIfExist = async (key,value) => {
	const response = await User.count({
		where:{
			[key]:value
		}
	})

	return response == 1;

}

export const userRepository = {
    getAll, 
    getById,
    updateUserById,
    deleteUserById,
    createUser,
    checkIfExist
  };