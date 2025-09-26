const {Router}=require('express');
const router =Router();
const userController=require('./user.controller')




router.get('/getUsers',userController.getUsers);

module.exports=router;