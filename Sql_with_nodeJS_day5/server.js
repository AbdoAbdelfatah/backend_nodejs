import express from 'express'
const app=express();
const PORT =3000;

app.get('/',(req,res)=>{
    res.send('<h1>Hello from Get</h1>')
})
app.listen(PORT,()=>{
    console.log(`server connected in port ${PORT}`)
})