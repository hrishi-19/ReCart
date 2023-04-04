const Product = require("../../models/Product")


const addProduct = async (req, res) => {
    
    const product = new Product(req.body)
    try {

        const result = await product.save()
    
        res.status(201).json(result)

    } catch (err) {
        res.status(500).json(err.message)
    }
}

const getAllProducts = async (req, res) => {

    try {

        const result = await Product.find()
        res.status(201).json(result)

    } catch (err) {
        res.status(500).json(err.message)
    }
}

const getProductById = async (req, res) => {

    try {

        const result = await Product.findById(req.params.id).populate("seller")
        res.status(201).json(result)

    } catch (err) {
        res.status(500).json(err.message)
    }
}

const deleteProduct=async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"Item deleted"})
    }catch(err){
        res.status(500).json(err.message)
    }
}
module.exports = { addProduct, getAllProducts, getProductById,deleteProduct }
