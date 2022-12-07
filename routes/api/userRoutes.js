const router = require('express').Router();

const {sayHello} = require('../../controllers/userController')

router.route('/hello').get(sayHello);

module.exports = router;