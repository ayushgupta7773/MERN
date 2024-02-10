const categoryModel = require('../models/CategoryModel.js');

const createCategory = async (req ,res) => {
    try {
        const savesCategory = await categoryModel.create(req.body);
        res.status(201).json({
            message: "Category saved.",
            data: savesCategory,
            flag: 1
        })
    } catch(err) {
        res.status(500).json({
            message: "Server error",
            falg: -1
        })
    }
}

const getAllCategory = async (req, res) => {
    try {
        const allcategories = await categoryModel.find();
        res.status(200).json({
            message: "Cotegories fetched.",
            data: allcategories,
            flag: 1
        })
    } catch(err) {
        res.status(500).json({
            message: "Server error",
            falg: -1
        })
    }
}

module.exports = {
    createCategory,
    getAllCategory
}