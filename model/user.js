const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// users schema
const userSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: false,
        lowercase: true,
        // value should be a valid email
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    pin: {
        type: String,
        required: true,

    },
} , {timestamps: true});
// users model
const User = mongoose.model('user', userSchema);
module.exports = User;
