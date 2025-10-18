import {createUser,deleteUser,findUserByEmail, updateUser} from '../services/user.service.js';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export const signup = async(req,res,next)=>{
   try{
       await createUser(req.body);
       res.status(201).json({message:"user created successfully"});
   }catch(err){
       next(err);
   }
} 

export const login=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const user=await findUserByEmail(email);
        if(!user)return res.status(401).json({message:"Invalid credentials"});
        const isMatch= bcrypt.compareSync(password,user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ message: "Login successful", token });
    }catch(err){
        next(err)
    }
}

export const updateUserController=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const user=await updateUser(id,req.body);
        if(!user)return res.status(404).json({message:"User not found"});
        res.json({ message: "User updated successfully", user });
    }catch(err){
        next(err);
    }
}

export const deleteUserContorller =async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await deleteUser(id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
}