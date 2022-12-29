const { Schema, model}= require('mongoose');
const UserSchema =Schema({
   name:{
    type:String,
    required:[true, 'name is required']
   },
   document:{
      type:String,
      required:[true, 'document is required']
     },
     address:{
      type:String,
      required:[true, 'address is required']
     },
     phone:{
      type:String,
      required:[true, 'phone is required']
     },
 
},{
   timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})
UserSchema.methods.toJSON=function(){
   const{__v,...rest}=this.toObject()
   return rest
 }

module.exports= model('User',UserSchema)
