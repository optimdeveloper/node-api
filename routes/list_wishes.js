
const { Router } = require('express');
const {check}=require('express-validator')
const { listWishGet,
        listWishesPut,
        listWishesPost,
        listWishesDelete,
       listWishesProductsGet } = require('../controllers/list_wishes');
const { existsIdListWish } = require('../helpers/db-validators');
const { validFields } = require('../middlewares/validFields');

const router = Router();

router.get('/', listWishGet );

router.get('/list', listWishesProductsGet );

router.put('/:id', 
         check('id','No es un id válido').isMongoId(),
         check('id').custom(existsIdListWish),
         validFields,
         listWishesPut );

router.post('/',[check('name','nombre no valido').not().isEmpty()], listWishesPost );

router.delete('/', listWishesDelete );



module.exports = router;