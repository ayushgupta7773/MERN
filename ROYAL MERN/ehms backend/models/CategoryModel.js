const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoryModel = new schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model("categories", categoryModel);