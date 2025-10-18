import { DataTypes } from 'sequelize';
import {db_config} from '../connection.js';
import bcrypt from 'bcrypt';

//db_config.define(modelName, attributes, options)
const User=db_config.define(
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
    password:{
        type:DataTypes.STRING,
        allowNull: false,
    }
   },
   {
    // Hooks = “lifecycle events.”
    // They let you run code automatically before or after certain actions
    // like inserting, updating, or deleting records.
    hooks:{
        beforeCreate:async(user)=>{
            const salt=await bcrypt.genSalt(10);
            user.password=await bcrypt.hash(user.password,salt);
        },
        beforeUpdate:async(user)=>{
            if(user.changed('password')){
                const salt=await bcrypt.genSalt(10);
                user.password=await bcrypt.hash(user.password,salt);
            }
        }
    },
    //By default, whenever you fetch a user (e.g. 
    // with findAll() or findOne()), 
    // do not include the password field in the returned data.”
    defaultScope:{attributes:{exclude:['password']}},
    timestamps:true
   }
)
User.prototype.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default User;