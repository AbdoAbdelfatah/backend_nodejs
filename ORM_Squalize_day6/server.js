import express from 'express' 
import {DB_connection} from'./DB/connection.js' 
import userRouter from './src/Modules/Users/users.router.js';
import productRouter from './src/Modules/Products/products.router.js';

const PORT =8080;
const app=express();
DB_connection();
 
app.use(express.json());

app.use('/user',userRouter);
app.use('/product',productRouter);

 
app.listen(PORT,()=>{
    console.log(`server connected in port ${PORT}`)
})