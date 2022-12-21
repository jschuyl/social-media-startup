const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')
const moment = require('moment');

const thoughtSchema = new Schema(
    {
        username: {
            type: String,
            required:true
        },
        thoughtItself:{
            type: String,
            require: true, // No empty thoughts
            minLength: 1,
            maxLength: 140 // bring back OG twitter
        },
        timeOfCreation: {
            type: Date,
            default: Date.now,
            get: (date) => moment(date).format('MMM DD, YYYY [at] hh:mm a')
        },
        reactions: [reactionSchema]
    },
    {
        toJSON:{
            id: false,
            virtuals: true,
            getters: true
        }
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought