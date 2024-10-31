const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    name:{
type:String,
required:true,
    },
    email:{
type:String,
required:true,
    },
    password:{
    type:String,
    required:true
    },
    salt:{
type:String,
required:false,
    }
})
const User = mongoose.model('user',UserSchema);
module.exports = User;