const express=require('express');
const app=express();
const userRouter=require('./src/modules/user/user.router')
const productRouter=require('./src/modules/product/product.router')

app.use('/users',userRouter);
app.use('/product',productRouter);


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})