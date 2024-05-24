import User from "./models/user.js";
import Doctor from "./models/doctor.js";
import Schedule from "./models/schedule.js";
import Appointment from "./models/appointment.js";
import Speciality from "./models/specialities.js";

// Un usuario tiene muchos turnos; un turno pertenece a un usuario
User.hasMany(Appointment, { foreignKey: 'patientId', field: 'patient_id' });
Appointment.belongsTo(User, { foreignKey: 'patientId', field: 'patient_id' });

// Un doctor tiene muchos turnos; un turno pertenece a un doctor
Doctor.hasMany(Appointment, { foreignKey: 'doctorId', field: 'doctor_id' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId', field: 'doctor_id' });

Doctor.hasMany(Schedule, { foreignKey: 'doctorId', field: 'doctor_id' });
Schedule.belongsTo(Doctor, { foreignKey: 'doctorId', field: 'doctor_id' });

// Un turno tiene un horario; un horario tiene muchos turnos
Schedule.hasMany(Appointment, { foreignKey: 'scheduleId', field: 'schedule_id' });
Appointment.belongsTo(Schedule, { foreignKey: 'scheduleId', field: 'schedule_id' });

// Un doctor tiene muchas especialidades; una especialidad pertenece a muchos doctores
Doctor.belongsToMany(Speciality, { through: 'DoctorSpeciality', foreignKey: 'doctorId', field: 'doctor_id' });
Speciality.belongsToMany(Doctor, { through: 'DoctorSpeciality', foreignKey: 'specialityId', field: 'speciality_id' });
