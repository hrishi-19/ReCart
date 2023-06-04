const Product = require("../../models/Product")


const addProduct = async (req, res) => {
    const product = new Product(req.body)
    try {

        const result = await product.save()
    
        res.status(201).json({msg:"Product Added"})

    } catch (err) {
        console.log(err)
        res.status(500).json(err.message)
    }
}

const getAllProducts = async (req, res) => {

    try {

        const result = await Product.find()
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json(err.message)
    }
}
const getUserProducts = async (req,res)=>{
    try {
        const result = await Product.find({seller:req.user._id})
        res.status(200).json(result)

    } catch (err) {
        res.status(500).json(err.message)
    }
}

const getProductById = async (req, res) => {
    try {

        const product = await Product.findById(req.params.id).populate("seller")
        
        res.status(201).json(product)

    } catch (err) {
        res.status(404).json({msg:"Product Not found"})
    }
}
const updateProduct = async (req, res) => {
    try {

        const product = await Product.findByIdAndUpdate(req.params.id,req.body)
        
        res.status(200).json({msg:"Updated Succesfully"})

    } catch (err) {
        res.status(404).json({msg:"Product Not found"})
    }
}

const deleteProduct=async(req,res)=>{
    try{
        await Product.findOneAndDelete({_id:req.params.id,seller:req.user._id})
        res.status(200).json({msg:"Item deleted"})
    }catch(err){
        res.status(500).json(err.message)
    }
}
module.exports = { addProduct, getAllProducts, getProductById,deleteProduct,updateProduct,getUserProducts}
