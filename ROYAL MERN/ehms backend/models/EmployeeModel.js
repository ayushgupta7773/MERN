const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeeSchema = new schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    job: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    manager_id: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('employees', employeeSchema);