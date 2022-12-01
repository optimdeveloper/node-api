const { Schema, model}= require('mongoose');
const ListWishSchema =Schema({
   name:{
    type:String,
    required:[true, 'nombre es requerido']
   },
   user:{
    type:String,
    required:[true,'usuario id es requerido'],
   },
   products:{
    type:Array,
    required:[true,'productos son requeridos'],
   },
  
})
 ListWishSchema.methods.toJSON=function(){
   const{__v,...rest}=this.toObject()
   return rest
 }
module.exports= model('List_wish',ListWishSchema)
