import express from 'express'
import DB_connection from './DB/connection.js';
import userRouter from './src/Modules/Users/users.router.js'; 
const PORT =3000;
const app=express();

DB_connection;
app.use(express.json());


app.use('/user',userRouter);
 
app.listen(PORT,()=>{
    console.log(`server connected in port ${PORT}`)
})