const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productModel = new schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    qty: {
        type: Number
    },
    category: {
        type: schema.Types.ObjectId,
        ref: 'categories'
    },
    status: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('products', productModel);