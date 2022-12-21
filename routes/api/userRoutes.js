const router = require('express').Router();

const {
    getUsers,
    createUser,
    getOneUser,
    sayHello
} = require('../../controllers/userController')

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:userId')
    .get(getOneUser)


router.route('/hello').get(sayHello);

module.exports = router;