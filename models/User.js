const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema ({
    username: {
        type: String,
        required: true,
        max_length: 25
    },
    email: {
        type: String,
        required: true,
    }

})