const register = require('../controllers/auth/register')

const router=require('express').Router()


router.post('/register',register)
module.exports=router
