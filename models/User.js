const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
        username: {
            type: String,
            required: true,
            max_length: 25
        },
        email: {
            type: String,
            required: true,
        },  
    },
    {
        toJSON: {
            getters: true
        }
    })

const User = model('user', userSchema)

module.exports = User;