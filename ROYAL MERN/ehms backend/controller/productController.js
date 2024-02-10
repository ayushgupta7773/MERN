const productModel = require('../models/ProductModel.js');

const createProduct = async (req, res) => {
    try {
        const savedProduct = await productModel.create(req.body);
        res.status(201).json({
            message: "Product created.",
            flag: 1,
            data: savedProduct
        })
    } catch(err) {
        res.status(500).json({
            message: "Server error",
            flag: -1
        })
    }
}

const getAllProduct = async (req, res) => {
    try {
        const allProduct = await productModel.find().populate('category');
        res.status(200).json({
            message: "Product fatched successfully.",
            flag: 1,
            data: allProduct
        })
    } catch(err) {
        res.status(500).json({
            message: "Server error",
            flag: -1
        })
    }
}

const getProductByStatus = async (req, res) => {
    try {
        const product = await productModel.find({status: req.params.status}).populate('category');
        res.status(200).json({
            message: "Product fatched successfully.",
            flag: 1,
            data: product
        })
    } catch(err) {
        res.status(500).json({
            message: "Server error",
            flag: -1
        })
    }
}

const getProductByQtyFilter = async (req, res) => {
    try {
        const product = await productModel.find({qty: {$gt: req.params.qty}}).populate('category');
        res.status(200).json({
            message: "Product fatched successfully.",
            flag: 1,
            data: product
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Server error",
            flag: -1
        })
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    getProductByStatus,
    getProductByQtyFilter
}