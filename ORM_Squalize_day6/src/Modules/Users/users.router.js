import express from "express";
import { signUp, deleteUser, findUser, updateUser, login } from "./users.controller.js";
const router=express.Router();

router.post('/signUp',signUp);
router.post('/login',login);
router.get('/getUsers',findUser);
router.put('/updateUser',updateUser);
router.delete('/deleteUser',deleteUser);


export default router;