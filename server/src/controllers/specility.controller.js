import { specialityServices } from "../services/speciality.services.js";

const createSpeciality = async (req, res) => {
    try {
        const newSpeciality = await specialityServices.createSpeciality(req.body);
        res.status(201).json(newSpeciality);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSpecialityById = (req, res, next) => {
	specialityServices.getSpecialityById(req.params.id)
		.then((response) => {
			res.status(200).json(response)
		})
		.catch((err) => {
			console.log(err);
			next(err)
		});
};

const getAllSpeciality = async (req, res) => {
	const { name } = req.query;
	try {
		let getByName;
		if (name) {
			getByName = await specialityServices.getSpecialityByName(name);
			if (!getByName) {
				res.status(404).json({ message: "No se encontró la especialidad" });
				return;
			}
		} else {
			getByName = await specialityServices.getAllSpeciality();
		}
		res.status(200).json(getByName);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const updateSpeciality = (req, res, next) => {
	const {id}= req.params
	const {name, description} = req.body
	specialityServices.updateSpeciality(id, name, description)
		.then((response) => {
			res.status(201).json(response);
		})
		.catch((err) => {
			next(err);
		});
};

const deleteSpeciality = (req, res, next) => {
	specialityServices.deleteSpeciality(req.params.id)
		.then((response) => {
			res.status(200).json(response)
		})
		.catch((err) => {
			console.log(err);
			next(err)
		});
};

export const specialityController = {
    createSpeciality,
    getAllSpeciality,
    getSpecialityById,
    updateSpeciality,
    deleteSpeciality,
}
