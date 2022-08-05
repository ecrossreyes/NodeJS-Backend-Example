const {Router} = require('express');
const { check } = require('express-validator');
const {usersGet, usersDelete, usersPost, usersPatch, usersPut} = require('../controller/users.controller');
const { emailExist, isValidRole, idExist } = require('../helpers/db-validators');
const { fieldsValidator } = require('../middlewares/field-validator');

const router = Router();

router.get('/', usersGet)

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(idExist),
    check('role').custom(isValidRole),
    fieldsValidator
], usersPut)

router.post('/', 
    [check('name','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').isLength({min: 6}),
    check('email','El email no es valido').isEmail(),
    check('email').custom(emailExist),
    check('role').custom(isValidRole),
    fieldsValidator
    ],
     usersPost)

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(idExist),
    fieldsValidator
],
usersDelete  )

router.patch('/',  usersPatch  )

module.exports = router;