import Specialities from "../models/specialities.js"

const createSpeciality = async (specialityData) =>{
    const newSpeciality = await Specialities.create(specialityData)
    return newSpeciality
} 

const getAllSpeciality = async () =>{
    const specialties= await Specialities.findAll()
    return specialties;
} 

const getSpecialityById = async (id) =>{
    const speciality = await Specialities.findByPk(id)
    return speciality;
}

const getSpecialityByName = async (name) =>{
    const speciality = await Specialities.findAll({where: { name: name }})
    return speciality;
}

const updateSpeciality = async (id, name, description) =>{
    await Specialities.update({ name, description}, {where: {id}})
    const speciality = await Specialities.findByPk(id)
    return speciality
}

const deleteSpeciality = async (id) =>{
    await Specialities.destroy({
        where:{id}
    })
}

export const specialityRepository = {
    createSpeciality,
    getAllSpeciality,
    getSpecialityById,
    getSpecialityByName,
    updateSpeciality,
    deleteSpeciality,
}