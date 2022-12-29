const { response, request } = require('express');
const User =require('../models/Usuario')

const usersGet = async (req = request, res = response) => {
    const {limit = 50,from=0 } = req.query;
    const users=await (await (User.find().skip(Number(from)).limit(Number(limit)))).reverse()
    res.json({
        users
    });
}

const userGet = async(req, res = response) => {
    const {id} = req.params;
    const query = await User.findById(id)
    
    res.json({
        query
    });
}

const usersPost = async(req, res = response) => {
   
    const {name, document, address, phone} = req.body;
    const user =new User({name,document,address,phone});

   const existDocument= await User.findOne({document})
    /*if(existDocument){
       return res.status(400).json({
            msg:'Nro. document already registered'
       })
   }*/
    await user.save()
    res.status(200).json({
        user
    });
}

const usersPut = async (req, res = response) => {

    const {id,...data} = req.body;

     await User.findByIdAndUpdate(id,data)
   
    res.status(200).json({
        msg: 'user updated',
    });
}

const userDelete =async  (req, res = response) => {
    const {id} = req.params;
    await User.findByIdAndDelete(id)
    res.status(200).json({
        msg: 'user deleted'
    });
}


const userDeleteSome =async  (req, res = response) => {
    const {users} = req.body;
    users.map(async id=>{
        await User.findByIdAndDelete(id)
    })
    res.status(200).json({
        msg: 'users deleted'
    });
}


module.exports = {
    userGet,
    usersGet,
    usersPost,
    usersPut,
    userDelete,
    userDeleteSome
}