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
    updateThought(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body}
            )
            .then((thought) => {
                !thought
                 ? res.status(404).json({ message: "I can't update what isn't there"})
                 : res.status(200).json({
                    thought
                 })
            })
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
    deleteThought(red, res) {
        Thought.deleteOne(
            { _id: req.params.thoughtId }
        )
        .then((thought) => {
            !thought
            ? res.status(404).json({ message: "Can't delete what never existed Cap'n" })
            : res.status(200).json({ message: "She's gone Cap'n" })           
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },
    sayHello(req, res) {
        return res.send('Helloooo')
    }
}