import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database.js';

const Schedule = sequelize.define('Schedule', {
  weekDay: {
    type: DataTypes.DATE,
    allowNull: false
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  doctorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Schedule',
  timestamps: true,
  paranoid: true,
});

export default Schedule;