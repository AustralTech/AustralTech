import {specialityRepository} from "../repositories/specilaity.repository.js"


const createSpeciality = async (specialityData) => {
	const newSpeciality = await specialityRepository.createSpeciality(specialityData);
	return newSpeciality;
	
};

const getAllSpeciality = async () => {
	const specialities = await specialityRepository.getAllSpeciality();
	return specialities;
};

const getSpecialityById = async (id) => {
	const speciality = await specialityRepository.getSpecialityById(id);
	if (!speciality) {
		throw new Error(`Speciality with id ${id} not found`)
	}
	return speciality;
};

const getSpecialityByName = async (name) => {
	const speciality = await specialityRepository.getSpecialityByName(name);
	if (speciality.length === 0) {
		throw new Error(`Speciality with name ${name} not found`)
	}
	return speciality;
};

const updateSpeciality = async (id, name, description) => {
	let updateSpeciality = await specialityRepository.getSpecialityById(id);
	if (!updateSpeciality) {
		throw new Error(`Speciality with id ${id} not found`);
	}
	updateSpeciality = await specialityRepository.updateSpeciality(id, name, description);
	return updateSpeciality;
};

const deleteSpeciality = async (id) => {
	let speciality = await specialityRepository.getSpecialityById(id);
	if (!speciality) {
		throw new Error(`Speciality with id ${id} not found`)
	}
	speciality = await specialityRepository.deleteSpeciality(id);
	return speciality;
};

export const specialityServices = {
    createSpeciality,
    getAllSpeciality,
    getSpecialityById,
    getSpecialityByName,
    updateSpeciality,
    deleteSpeciality,
}