import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database.js';

const Appointment = sequelize.define('Appointment', {
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  scheduleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Appointment',
  timestamps: true,
  paranoid: true,
});

export default Appointment;