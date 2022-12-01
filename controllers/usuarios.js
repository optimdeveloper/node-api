const { response, request } = require('express');
const User =require('../models/Usuario')
const bcryptjs = require('bcryptjs');

const {validationResult} = require('express-validator')

const usuariosGet = (req = request, res = response) => {
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

const usuariosPost = async(req, res = response) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    const {name, email, rol,password} = req.body;
    const user =new User({name,email,rol,password});

   const existEmail= await User.findOne({email})
    if(existEmail){
       return res.status(400).json({
            msg:'Email already registered'
       })
   }

    const salt=bcryptjs.genSaltSync();
    user.password=bcryptjs.hashSync(password,salt)
    await user.save()
    res.json({
        msg: 'post API - usuariosPost',
        user
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}