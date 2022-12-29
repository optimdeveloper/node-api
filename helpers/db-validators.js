
const Usuario = require("../models/Usuario")

const existsIdUser=async(id)=>{
  const existId=await Usuario.findById(id)
  if(!existId){
    throw new Error( `El id no existe enla db: ${id}`)
  }
}

module.exports={

    existsIdUser
}