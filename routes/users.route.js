const {Router} = require('express')
const {usersGet, usersDelete, usersPost, usersPatch, usersPut} = require('../controller/users.controller');

const router = Router();

router.get('/', usersGet)

router.put('/:id', usersPut)

router.post('/', usersPost)

router.delete('/:id',  usersDelete  )

router.patch('/',  usersPatch  )

module.exports = router;