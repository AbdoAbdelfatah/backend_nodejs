import express from "express";
import { addUser, deleteUser, findUser, updateUser } from "./users.controller.js";
const router=express.Router();

router.post('/addUser',addUser);
router.get('/getUsers',findUser);
router.put('/updateUser',updateUser);
router.delete('/deleteUser',deleteUser);


export default router;