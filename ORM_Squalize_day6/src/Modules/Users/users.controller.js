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
export const findUser = async (req, res, next) => {
  try {
    //const users = await User.findAll();
    //const user =await User.findByPk(req.query.id); 
    //const user = await User.findOne({where:{gender}})
    const users = await User.findAndCountAll();
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: users,
    });

  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

/**
 * destroy({where:{
 * gender:req.query.gender}})
 */

export const deleteUser=async(req,res)=>{
    try{
        console.log(req.query.gender);
        const gender=req.query.gender;
        const numDeletedUSer=await User.destroy({where:{gender}});
        res.json({"Message":numDeletedUSer});
    }
    catch(err){
        res.json({"Message":"Error found"});
    }
} 

/**
 * update({name,email},{where:{gender}})
 */

export const updateUser=async(req,res)=>{
    try{
        console.log(req.query.name);
        const name=req.query.name;
        const {name1,email}=req.body;
        const numUpdatedUsers=User.update({ name:name1,email},{where:{name}});
        res.json({"Message":numUpdatedUsers})
    }
    catch(err){
        res.json({"Message":"Error Found"});
    }
}