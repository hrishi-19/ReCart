const router=require('express').Router()
const {getAllProducts, getProductById,addProduct, deleteProduct} = require('../controllers/Product/product')


router.get('/',getAllProducts)
router.get('/:id',getProductById)
router.delete('/:id',deleteProduct)
router.post('/add',addProduct)
module.exports=router