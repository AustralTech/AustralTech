import { specialityServices } from "../services/speciality.services.js";

const createSpeciality = async (req, res) => {
	try {
		const newSpeciality = await specialityServices.createSpeciality(req.body);
		res.status(201).json(newSpeciality);
	} catch (error) {
		console.error("Error en el controlador al crear especialidad:", error);
		res.status(500).json({ message: error.message });
	}
};

const getSpecialityById = (req, res, next) => {
	specialityServices.getSpecialityById(req.params.id)
		.then((response) => {
			res.status(200).json(response)
		})
		.catch((err) => {
			console.log("Error en el controlador al obtener especialidad por ID:", err);
			next(err)
		});
};

const getSpecialityByName = (req, res, next) => {
	try {
		const speciality = specialityServices.getSpecialityByName(req.params.name);
		res.status(200).json(speciality);
	} catch (error) {
		console.error("Error en el controlador al obtener especialidad por nombre:", error);
		next(error);
	}
};

const getAllSpeciality = async (req, res) => {
	try {
		const specialities = await specialityServices.getAllSpeciality();
		res.status(200).json(specialities);
	} catch (error) {
		console.error("Error en el controlador al obtener especialidades:", error);
		res.status(400).json({ error: error.message });
	}
};

const updateSpeciality = (req, res, next) => {
	const { id } = req.params
	const { name, description } = req.body
	specialityServices.updateSpeciality(id, name, description)
		.then((response) => {
			res.status(201).json(response);
		})
		.catch((err) => {
			console.log("Error en el controlador al actualizar especialidad:", err);
			next(err);
		});
};

const deleteSpeciality = (req, res, next) => {
	specialityServices.deleteSpeciality(req.params.id)
		.then((response) => {
			res.status(200).json(response)
		})
		.catch((err) => {
			console.log("Error en el controlador al eliminar especialidad:", err);
			next(err)
		});
};

export const specialityController = {
	createSpeciality,
	getAllSpeciality,
	getSpecialityById,
	getSpecialityByName,
	updateSpeciality,
	deleteSpeciality,
}
