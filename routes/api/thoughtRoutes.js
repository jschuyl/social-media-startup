const router = require('express').Router();

const {
    think,
    updateThought,
    getAllThoughts,
    getOneThought,
    deleteThought,
    sayHello,
    createReaction,
    deleteReaction
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

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

router.route('/hello').get(sayHello);

module.exports = router;