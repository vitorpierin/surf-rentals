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
  paid: boolean;
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
  paid: {
    type: DataTypes.BOOLEAN
  },
  document: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'rentals',
  timestamps: false
})