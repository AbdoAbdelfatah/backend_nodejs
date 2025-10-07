import db_connection from '../../../DB/connection.js'
import axios from 'axios'


export const addUser = async(req,res,next)=>{
    const {name , email ,pass,gender, address }=req.body;

   
    const insertQuery= `insert into users (name,email,pass,gender,address) 
        values ('${name}','${email}','${pass}','${gender}','${address}')`;

    const getUser = await axios.get(`http://localhost:3000/user/getUser?email=${email}`);
    if(getUser?.data?.data){
        return res.json({message:"user already exist"});
    }
    db_connection.query(insertQuery,(err,result)=>{
        if(err){  
            return res.json({message:err.message});
        }
        return console.log({result});
    })

}


export const getUserByEmail=(req,res,next)=>{
    const {email} =req.query;
    if(!email){
        return res.json({message:"Email is required"})
    }
    const selectQuery=`select * from users where email='${email}';`; 
    db_connection.query(selectQuery,(err,result)=>{
        if(err){
            return res.json({message:err.message});
        }
        if(result.length){
            return res.json({message:"User Found",data:result[0]});
        }
        return res.json({message:"User not found"});
    }
    )
}

export const updateUser = async(req,res)=>{
      
     const Email=req.query.email;
     
     const user = await axios.get(`http://localhost:3000/user/getUser?email=${Email}`);
     if(!user.data){
        return res.json({Message:"user not found!"});
     }
      
     
     const allProp=['name','pass','email','gender','address'];
     const updated={};

     allProp.forEach(el=>{
        if(req.body[el]!=undefined){
              updated[el]=req.body[el];
        }
     });
     const fields= Object.keys(updated).map(el=>`${el}=?`).join(', ');
     const values=Object.values(updated);
  
     const updateQuery=`update users set ${fields} where email= '${Email}';`;
  
     db_connection.execute(updateQuery,[...values],(err,result)=>{
        if(err){
            return res.json({Error:err});
        }
        if(!result.affectedRows){
            return res.json({message:"no rows are affected"});
        }
        res.json({message:"user ip to date"});
     })
}


export const deleteUser=async (req,res)=>{

    const Email=req.query.email;
    const user = await axios.get(`http://localhost:3000/user/getUser?email=${Email}`);
    if(!user.data){
        return res.json({Message:"user not found!"});
    }
   const sql = "DELETE FROM users WHERE email = ?";

    db_connection.execute(sql,[Email],(err,result)=>{
        if(err){
            return res.json({Error:err});
        }
        res.json({"Message":`user's email: ${Email} was deleted`})
    })
}