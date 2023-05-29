const Product = require("../models/products")

const getAllProducts = async(req , res) =>{
    const myBlogs = await Product.find()
    res.status(200).json({myBlogs})
};


const getAllProductsTesting = async(req , res) =>{
    const myBlogs = await Product.find()
    res.status(200).json({myBlogs})
};

module.exports = {getAllProducts , getAllProductsTesting }
 

