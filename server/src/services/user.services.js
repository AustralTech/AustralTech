import { userRepository } from "../repositories/user.repository.js";

// Obtener todos los perfiles de usuarios (solo para administradores): Define una función en el servicio que permita obtener todos los perfiles de pacientes almacenados en la base de datos. Esta función debe estar disponible solo para los usuarios con rol de administrador. Utiliza el repositorio correspondiente para realizar la consulta y manejar adecuadamente cualquier error que pueda ocurrir durante la operación.
//llamando a la funcion findAll del repositorio, y checkeando que el usuario sea admin

const getAll = async () => {
    try {
        const users = await userRepository.getAll();
        return users;
    } catch (error) {
        throw new Error('Error al obtener todos los usuarios');
    }
}


//Obtener usuario: Define una función en el repositorio que reciba como parámetro el ID del paciente
// y que utilice consultas SQL para recuperar los datos del paciente desde la base de datos.

const getById = async (id) => {
    const user = await userRepository.getById(id)
    if (!user) {
        throw new Error(`User doesn't exist with id ${id}`)
    }
    return user;
};

// Actualizar perfil de paciente: Define una función en el repositorio que reciba como parámetro el ID del paciente y 
//los datos actualizados del perfil
//, y que utilice consultas SQL para actualizar el perfil del paciente en la base de datos.

const updateUserById = async (id, userData) => {
    try {
        // Verificar si el usuario existe
        const user = await userRepository.getById(id);
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        // Actualizar el usuario con los datos proporcionados
        const updatedUser = await user.update(userData);
        
        // Devolver el usuario actualizado
        return updatedUser;
    } catch (error) {
        throw new Error('Error al actualizar el usuario');
    }
}

//Eliminar perfil de paciente: Define una función en el repositorio que reciba como parámetro el ID del paciente y
// que utilice consultas SQL para eliminar el perfil del paciente de la base de datos.
// El borrado debe ser lógico, es decir, cambiar el atributo isActive a false.

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
}

//crear usuario con los datos proporcionados, y verificar si no hay otro usuario con el mismo email o DNI, y si no lo hay, guardar el usuario en la base de datos
// por defecto poner el admin en false, porque es un usuario comun y el active en true

const createUser = async (userData) => {
    try {
        // Verificar si ya existe un usuario con el mismo email
        const emailExist = await userRepository.checkIfExist("email", userData.email);
        if(emailExist){
          throw new Error("An user with email '" + userData.email + "' already exists.");
        }
        
        // Verificar si ya existe un usuario con el mismo DNI
        const dniExist = await userRepository.checkIfExist("DNI", userData.dni);
        if(dniExist){
          throw new Error("An user with DNI '" + userData.dni + "' already exists.");
        }

        // Crear el usuario utilizando el modelo User
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



