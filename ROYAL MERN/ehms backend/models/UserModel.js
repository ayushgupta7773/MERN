const mongoose = require('mongoose');
const schema = mongoose.Schema;

let userSchema = new schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('users', userSchema);