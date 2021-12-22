import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface RentalInstance extends Model {
  id: number;
  name: string;
  address: string;
  finalizado: boolean;
  equipment_id: number;
  date_start: string;
  date_end: string;
  total_price: number;
  info: string;
  paied: boolean;
  document: string;
}

export const Rental = sequelize.define<RentalInstance>('Rental', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  finalizado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  equipment_id: {
    type: DataTypes.INTEGER
  },
  date_start: {
    type: DataTypes.STRING
  },
  date_end: {
    type: DataTypes.STRING
  },
  total_price: {
    type: DataTypes.INTEGER
  },
  info: {
    type: DataTypes.STRING
  },
  paied: {
    type: DataTypes.BOOLEAN
  },
  document: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'rentals',
  timestamps: false
})