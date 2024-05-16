import doctorServices from "../services/doctor.services.js";

const findallDoctors = async (req, res) => {
    try {
        const doctors = await doctorServices.findallDoctors();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const findDoctorById = async (req, res) => {
    try {
        const doctor = await doctorServices.findDoctorById(req.params.id);
        res.status(200).json(doctor);
    } catch (error) {
        console.log('aca pasa 3');
        res.status(500).json({ message: error.message });
    }
};

const findDoctorbySpeciality = async (req, res) => {
    try {
        const doctors = await doctorServices.findDoctorbySpeciality(req.params.specialtyId);
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createDoctor = async (req, res) => {
    try {
        const newDoctor = await doctorServices.createDoctor(req.body);
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateDoctor = async (req, res) => {
    try {
        const doctorToUpdate = await doctorServices.updateDoctor(req.params.id, req.body);
        res.status(200).json(doctorToUpdate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteDoctor = async (req, res) => {
    try {
        const doctorToDelete = await doctorServices.deleteDoctor(req.params.id);
        res.status(200).json(doctorToDelete);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    findallDoctors,
    findDoctorById,
    findDoctorbySpeciality,
    createDoctor,
    updateDoctor,
    deleteDoctor
};

