import User from "../models/user";
import Doctor from "../models/doctor";
import Schedule from "../models/schedule";
import Appointment from "../models/appointment";
import Speciality from "../models/speciality";


  // Define la relación muchos a muchos entre Doctor y Specialty a través de la tabla intermedia MedicoEspecialidad
 Doctor.belongsToMany(Specialty, {
   through: 'MedicoEspecialidad', // Nombre de la tabla intermedia
   foreignKey: 'Medico_ID', // Clave foránea en la tabla intermedia que referencia a Doctor
   otherKey: 'Especialidad_ID', // Clave foránea en la tabla intermedia que referencia a Specialty
   as: 'specialties' // Alias para la asociación desde Doctor hacia Specialty
});

  
 Specialty.belongsToMany(Doctor, {
   through: 'MedicoEspecialidad', // Nombre de la tabla intermedia
   foreignKey: 'Especialidad_ID', // Clave foránea en la tabla intermedia que referencia a Specialty
   otherKey: 'Medico_ID', // Clave foránea en la tabla intermedia que referencia a Doctor
   as: 'doctors' // Alias para la asociación desde Specialty hacia Doctor
});


// Un usuario tiene muchos turnos; un turno pertenece a un usuario
User.hasMany(Appointment, { foreignKey: 'userId', field: 'user_id' });
Appointment.belongsTo(User, { foreignKey: 'userId', field: 'user_id' });

// Un doctor tiene muchos turnos; un turno pertenece a un doctor
Doctor.hasMany(Appointment, { foreignKey: 'doctorId', field: 'doctor_id' });
Appointment.belongsTo(Doctor, { foreignKey: 'doctorId', field: 'doctor_id' });

// Un turno tiene un horario; un horario tiene muchos turnos
Schedule.hasMany(Appointment, { foreignKey: 'scheduleId', field: 'schedule_id' });
Appointment.belongsTo(Schedule, { foreignKey: 'scheduleId', field: 'schedule_id' });

// Un doctor tiene muchas especialidades; una especialidad pertenece a muchos doctores
Doctor.belongsToMany(Speciality, { through: 'DoctorSpeciality', foreignKey: 'doctorId', field: 'doctor_id' });
Speciality.belongsToMany(Doctor, { through: 'DoctorSpeciality', foreignKey: 'specialityId', field: 'speciality_id' });
