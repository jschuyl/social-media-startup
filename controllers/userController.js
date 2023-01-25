const User = require('../models/User');

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
    createUser(req, res ) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
    },
    updateUser(req,res) {
        User.findByIdAndUpdate(
            { _id: req.params.userId },
            { $set: req.body}
            )
            .then((user) => {
                !user
                 ? res.status(404).json({ message: "I can't update what isn't there"})
                 : res.status(200).json({
                    user
                 })
            })
            .catch((err) => {
                res.status(500).json(err)
            })
      },
    deleteUser(req,res) {
        User.deleteOne(
            { _id: req.params.userId }
        )
        .then((user) => {
            !user
             ? res.status(404).json({ message: "Can't delete what never existed Cap'n" })
             : res.status(200).json({ message: "She's gone Cap'n" })
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },
    createFriend(req, res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            { $addToSet: {friends: req.params.friendId}},
            { runValidators: true, new: true}
        )
        .then((user) =>{
            !user
            ? res.status(404).json({message: "No friend here"})
            : res.status(200).json(user)
        })
        .catch((err) => res.status(500).json(err))
    },
    deleteFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            { $pull: {friends: req.params.friendId}},
            { new: true}
        )
        .then((user)=>{
            !user
            ? res.status(404).json({message: "Can't get rid of friends you don't have"})
            : res.status(200).json(user)
        })
        .catch((err)=>res.status(500).json(err))
    },
    sayHello(req, res) {
        return res.send('Helloooo')
    }
}