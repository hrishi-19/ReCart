const router=require('express').Router()
const {getAllProducts, getProductById,addProduct, deleteProduct, updateProduct, getUserProducts} = require('../controllers/Product/product')
const { verifyToken } = require('../controllers/verification/tokenVerify')

router.get('/myProducts',verifyToken,getUserProducts)
router.get('/',verifyToken,getAllProducts)
router.get('/:id',verifyToken,getProductById)
router.delete('/:id',verifyToken,deleteProduct)
router.post('/add',verifyToken,addProduct)
router.put('/:id',verifyToken,updateProduct)
module.exports=router