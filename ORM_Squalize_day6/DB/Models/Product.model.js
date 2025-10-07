import { DataTypes } from 'sequelize';
import {db_config} from '../connection.js';
import { User } from './User.model.js';



export const Product=db_config.define(
   'Product',
   {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:1
        } 
    } 
   },
   {
    timestamps:true
   }
);

User.hasMany(Product,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
});
Product.belongsTo(User);
 
