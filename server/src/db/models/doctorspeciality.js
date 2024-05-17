
import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database.js';

const DoctorSpeciality = sequelize.define('DoctorSpeciality', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
},
  {
    timestamps: false,
  }
);

export default DoctorSpeciality;