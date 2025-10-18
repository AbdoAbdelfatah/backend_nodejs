import express from 'express';
import {signup,login, updateUserController, deleteUserContorller} from '../controllers/user.controller.js'

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.put("/update/:id",updateUserController);
router.delete('/delete',deleteUserContorller);

export default router;
