import User from "../../../DB/Models/User.model.js";



/**
 * create
 * bulkCreate
 * findOrCreate
 */
export const signUp=async(req,res,next)=>{
    try{
        const {name,email,password,gender}=req.body;

        const userExist=await User.findOne({where:{email}});
        if(userExist){
          return res.status(400).json({Message:"user already exists"});
        }

        const newUser=await User.create({name,email,password,gender});
        res.status(201).json({"Message: ":"user created successfully",newUser});
    }
    catch(err){
         res.status(500).json({ message: err.message });
    }
}

export const login=async(req,res,next)=>{
  try{
       const {email , password}=req.body;
       // use scope(null) to include password if defaultScope excludes it
       const userExist=await User.scope(null).findOne({where:{email}});
       if(!userExist){
         return res.status(400).json({Message:"Invalid cradintials"});
        }
        
        const valid = await userExist.checkPassword(password);
        
        if (!valid) return res.status(401).json({ message: 'Invalid password' });
         res.json({ message: 'Login successful' });
      }
      catch(err){
        res.json({message:err});
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