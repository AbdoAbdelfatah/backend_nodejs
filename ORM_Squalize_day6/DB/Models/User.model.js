import { DataTypes } from 'sequelize';
import {db_config} from '../connection.js';



export const User=db_config.define(
   'User',
   {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        } 
    },
    gender: {
        type: DataTypes.ENUM('male', 'female'),
        defaultValue:'male'
    },
    pass:{
        type:DataTypes.STRING,
        allowNull: false,
    }
   },
   {
    timestamps:true
   }
)
 
