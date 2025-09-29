import {Router} from "express";
const router =Router();
import * as userController from '../Users/users.controller.js'


router.post('/register',userController.addUser);
router.get('/getUser',userController.getUserByEmail);



export default router;