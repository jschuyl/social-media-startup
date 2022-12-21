const User = require('../models/User'); // I can't do the { model, model } thing for whatever reason, so I have to require each manually
const Thought = require('../models/Thought');

module.exports ={
    getUsers(req,res) {
        User.find()
            .select('-__v')
            .then((user) => 
                res.status(200).json(user)
            )
            .catch((err)=> 
                res.status(500).json(err)
            )
    },
    getOneUser(req,res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) => 
                !user
                 ? res.status(404).json({ message: "No sign of life 'ere Cap'n"})
                 : res.json({
                    user
                 })
            )
    },
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
    sayHello(req, res) {
        return res.send('Helloooo')
    }
}