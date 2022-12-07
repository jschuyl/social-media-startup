const router = require('express').Router();

const {sayHello} = require('../../controllers/thoughtController')

router.route('/hello').get(sayHello);

module.exports = router;