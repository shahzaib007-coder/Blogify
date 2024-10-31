const express = require('express')
const router = express.Router();
const User = require('../Models/User')
router.get('/signin',(req,res)=>{
res.render('signin')
})
router.get('/signup',(req,res)=>{
res.render('signup')
})
router.post('/signup',async(req,res)=>{
const {name,email,password} = req.body;
if(!email || !name ||!password){
    return res.status(204).send({error:"Input all fields"})
}

const user = await User.create({
    name,
    email,
    password,
})  

})

router.post('/signin',(req,res)=>{
    
})



module.exports = router;