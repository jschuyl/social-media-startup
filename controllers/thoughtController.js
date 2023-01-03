const Thought = require('../models/Thought')
const User = require('../models/User')

module.exports ={
    think(req,res) { // this is create thought, but think is too funny to not do
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $addToSet: {thoughts: thought._id} },
                    {new: true}
                )
            })
            .then((user) =>
                !user
                ? res.status(404).json({ message: "You have the words, but no mouth to speak from. You need a user."})
                : res.json('Thought created successfully')
            )
            .catch((err) => res.status(500).json(err))
    },
    getAllThoughts(req, res) {
        Thought.find()
            .select('-__v')
            .then((thought) => 
                res.status(200).json(thought)
            )
            .catch((err) => 
                res.status(500).json(err)
            )
    },
    getOneThought(req,res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then(async (thought) => 
                !thought
                 ? res.status(404).json({ message: "No sign of thought 'ere Cap'n"})
                 : res.json({
                    thought
                 })
            )
    },
    sayHello(req, res) {
        return res.send('Helloooo')
    }
}