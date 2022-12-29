
const { Router } = require('express');
const {check}=require('express-validator')
const { userGet,
        usersGet,
        usersPut,
        usersPost,
        userDelete,
        userDeleteSome} = require('../controllers/usuarios');
const { existsIdUser } = require('../helpers/db-validators');
const { validFields } = require('../middlewares/validFields');

const router = Router();

router.get('/:id',[check('id','No es un id válido').isMongoId(),
check('id').custom(existsIdUser),validFields] ,userGet );

router.get('/',[] ,usersGet );

router.post('/',[
check('name','El nombre es obligatorio').exists(),
check('document','El documento es obligatorio').exists(),
check('address','La direccion es obligatoria').exists(),
check('phone','El telefono es obligatorio').exists(),
validFields], usersPost );

router.put('/',[
check('id','El id es obligatorio').exists(),
check('id','No es un id válido').isMongoId(),
check('id').custom(existsIdUser),
check('name','El nombre es obligatorio').exists(),
check('document','El documento es obligatorio').exists(),
check('address','La direccion es obligatoria').exists(),
check('phone','El telefono es obligatorio').exists(),
validFields], usersPut );

router.delete('/single/:id',[check('id','No es un id válido').isMongoId(),
check('id').custom(existsIdUser),validFields] ,userDelete );

router.post('/delete_some',[
check("users",'Es necesario un array de ids').exists(),
check("users.*",'No es un id válido').isMongoId(),
check("users.*").custom(existsIdUser),validFields],userDeleteSome );

module.exports = router;