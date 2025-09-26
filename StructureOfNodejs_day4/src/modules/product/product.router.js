const {Router}=require('express');
const router=Router();
const productController=require('./product.controller')

router.get('/getProducts',productController.getproduct);


module.exports=router;
