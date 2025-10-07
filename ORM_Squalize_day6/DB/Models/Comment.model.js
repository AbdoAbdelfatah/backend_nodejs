import { DataTypes } from 'sequelize';
import { db_config } from '../connection.js';
import { User } from './User.model.js';
import { Product } from './Product.model.js';

export const Comment = db_config.define(
  'Comment',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    addedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
);

User.hasMany(Comment, { foreignKey: 'addedBy', onDelete: 'CASCADE' });
Comment.belongsTo(User, { foreignKey: 'addedBy' });

Product.hasMany(Comment, { foreignKey: 'productId', onDelete: 'CASCADE' });
Comment.belongsTo(Product, { foreignKey: 'productId' });
