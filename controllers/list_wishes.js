const { response, request } = require('express');
const ListWishes = require('../models/ListWishes');

const listWishesGet = (req = request, res = response) => {
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const listWishesPost = async(req, res = response) => {
    
    const {name, user, products} = req.body;
    const list =new ListWishes({name,user,products});

   const existName= await ListWishes.findOne({name})
    if(existName){
       return res.status(400).json({
            msg:'Name already registered'
       })
   }
    await list.save()
    res.json({
        msg: 'post API - listWishesPost',
        list
    });
}

const listWishesPut = async(req, res = response) => {

    const {id}=req.params
    const {_id,...data} = req.body;
     const list= await ListWishes.findByIdAndUpdate(id,data)
   
    res.json({
        msg: 'post API - listWishesPost',
        list
    });
}
const listWishGett = async(req, res = response) => {
    const {id}=req.params
    const query = await ListWishes.find({user:id})
    
    res.json({
        query
    });
}
const listWishGet = async(req, res = response) => {
    const {id} = req.body;
    const query = await ListWishes.find({user:id})
    
    res.json({
        query
    });
}
const listWishesProductsGet = async(req, res = response) => {
    const {id} = req.body;
    const query = await ListWishes.findById(id)
    
    res.json({
        query
    });
}
const listWishesPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const listWishesDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - listWishesDelete'
    });
}




module.exports = {
    listWishGet,
    listWishesPost,
    listWishesPut,
    listWishesPatch,
    listWishesDelete,
    listWishesProductsGet 
}