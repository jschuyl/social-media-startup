const router = require('express').Router();

const {think,
    updateThought,
    getAllThoughts,
    getOneThought,
    deleteThought,
    sayHello
} = require('../../controllers/thoughtController')

router
    .route('/')
    .get(getAllThoughts)
    .post(think);

router
    .route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

router.route('/hello').get(sayHello);

module.exports = router;