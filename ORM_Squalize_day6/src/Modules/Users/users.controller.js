import { User } from "../../../DB/Models/User.model.js";



/**
 * create
 * bulkCreate
 * findOrCreate
 */
export const addUser=async(req,res,next)=>{
    try{
        const {name,email,pass,gender}=req.body;
        const newUser=await User.create({name,email,pass,gender});
        res.json({"Message: ":"user added successfully",newUser});
    }
    catch(err){
         res.status(500).json({ message: err.message });
    }
}

/**
 * finders
 * findAll
 * findByPk
 * findOne
 * findAndCountAll
 * findOrCreate
 */

/**
 * destroy({where:{
 * gender:req.query.gender}})
 */

/**
 * update({name,email},{where:{gender}})
 */