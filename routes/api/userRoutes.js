const router = require('express').Router();

const {
    getUsers,
    createUser,
    getOneUser,
    updateUser,
    sayHello,
    deleteUser
} = require('../../controllers/userController')

router
    .route('/')
    .get(getUsers)
    .post(createUser);

router
    .route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

router.route('/hello').get(sayHello);

module.exports = router;