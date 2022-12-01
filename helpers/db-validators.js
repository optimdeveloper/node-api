const ListWishes = require("../models/ListWishes")

const existsIdListWish=async(id)=>{
  const existList=await ListWishes.findById(id)
  if(!existList){
    throw new Error( `El id no existe enla db: ${id}`)
  }
}

module.exports={
    existsIdListWish
}