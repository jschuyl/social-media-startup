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
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]  
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

userSchema.virtual('totalFriends').get(() => {
    return this.friends.length;
});

const User = model('user', userSchema)

module.exports = User;