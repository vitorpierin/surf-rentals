import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface SurfboardInstance extends Model {
  id: number;
  brand: string;
  size: string;
  available: boolean;
  info: string;
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
  info: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'surfboards',
  timestamps: false
})