import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface SurfboardInstance extends Model {
  id: number;
  brand: string;
  size: string;
  available: boolean;
  image: string;
}

export const Surfboard = sequelize.define<SurfboardInstance>('Rental', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  brand: {
    type: DataTypes.STRING
  },
  size: {
    type: DataTypes.STRING
  },
  available: {
    type: DataTypes.BOOLEAN
  },
  image: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'surfboards',
  timestamps: false
})