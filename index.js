const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express();
const port = 3000
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','ejs');
app.set('views',path.resolve('views'))
app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(port,()=>{
    console.log(`Server started ${port}`)
})
