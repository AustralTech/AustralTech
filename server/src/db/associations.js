import {Doctor, Specialty} from './models';


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


