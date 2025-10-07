import express from "express";
import { addUser } from "./users.controller.js";
const router=express.Router();

router.post('/addUser',addUser);


export default router;