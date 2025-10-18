import bcrypt, { hashSync } from 'bcrypt'
import User from '../models/user.model.js'

export const createUser = async(data)=>{
    const hashPass= bcrypt.hashSync(data.password,10);
    const user =new User({...data,password:hashPass});
    return await user.save();
}

export const findUserByEmail =async(email)=>{
     return await User.findOne({email});
}


export const updateUser = async(id,data)=>{
    if(data.password){
        data.password= bcrypt.hashSync(data.password,10);
    }
    const updatedUser=await User.findByIdAndUpdate(id,data,{new:true});
    return updatedUser;
}

export const deleteUser= async(id)=>{
    const deletedUser=await User.findByIdAndDelete(id);
    return deletedUser;
}

