
const { Router } = require('express');
const {check}=require('express-validator')
const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();


router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/',[check('email','email no valido').isEmail()], usuariosPost );

router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );


module.exports = router;