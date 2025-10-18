import Product from '../models/product.model.js'


export const createProduct = async (data)=>{
    const product=new Product(data);
    return await product.save(); 
}

export const getAllProducts=async()=>{
    return await Product.find().populate([{path:"createdBy",select:"name email -_id"}]);

   /* return await Product.aggregate([{
        $lookup:{
            from:"users",
            localField:"createdBy",
            foreignField:"_id",
            as:"userData"
        }
    },{
    $project: {
      title: 1,
      price: 1,
      "userData.name": 1,
      "userData.email": 1
    }
  }]); */
}