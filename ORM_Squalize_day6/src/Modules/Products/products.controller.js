import {Product} from '../../../DB/Models/Product.model.js';
import User from "../../../DB/Models/User.model.js";


export const getProducts=async (req,res,next)=>{
    try{
        const products=await Product.findAll({
           include:[{model:User,attributes:["name","email"]}],
           limit:2,
           offset:2
        });
        res.json({products});
    }
    catch(err){
        res.json({message:err});
    }
}
