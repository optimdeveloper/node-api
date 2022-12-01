const { Schema, model}= require('mongoose');
const UserSchema =Schema({
   name:{
    type:String,
    required:[true, 'name is required']
   },
   email:{
    type:String,
    required:[true,'email is required'],
    unique:true
   },
   password:{
    type:String,
    required:[true,'password is required'],
   },
   avatar:{
    type:String,
   },
   rol:{
    type:String,
    emun:['ADMIN_ROLE','USER_ROLE']
   },
   state:{
    type:Boolean,
    default:true
   },
   google:{
    type:Boolean,
    default:false
   }


})

module.exports= model('User',UserSchema)
