const empModel = require('../models/EmployeeModel.js');

const createEmp = async (req, res) => {
    try {
        const newEmp = await empModel.create(req.body);
        res.status(201).json({
            message: "New employee is created.",
            data: newEmp,
            flag: 1
        })
    } catch(err) {
        res.status(404).json({
            message: "Error in creating employee",
            data: err,
            flag: -1
        })
    }
}

const getById = async (req, res) => {
    try {
        const emp = await empModel.findById(req.params.id);
        if(emp == null) {
            res.status(404).json({
                message: "Employee not found",
                flag: -1
            })
        } else {
            res.status(200).json({
                message: "Employee found successfully.",
                data: emp,
                flag: 1
            })
        }
    } catch(err) {
        res.status(500).json({
            message: "Error in getting employee.",
            data: err,
            flag: -1
        })
    }
}

const getAllEmp = async (req, res) => {
    try {
        const allEmp = await empModel.find();
        if(allEmp == null) {
            res.status(404).json({
                message: "No Employee",
                flag: -1
            })
        } else {
            res.status(200).json({
                message: "Get all employees.",
                data: allEmp,
                flag: 1
            })
        }
    } catch(err) {
        res.status(500).json({
            message: "Error in getting all employees.",
            data: err,
            flag: -1
        })
    }
}

const deleteEmp = async (req, res) => {
    try {
        const emp = await empModel.findByIdAndDelete(req.params.id);

        if(emp == null) {
            res.status(404).json({
                message: "Employee not found.",
                flag: -1
            })
        } else {
            res.status(200).json({
                message: "Employee deleted successfully.",
                data: emp,
                flag: 1
            })
        }

    } catch(err) {
        res.status(500).json({
            message: "Error in deleting employee.",
            flag: -1
        })
    }
}

const updateEmp = async (req, res) => {
    try {
        const id = req.params.id;
        if(id == null) {
            res.status(404).json({
                message: "Employee not found",
                flag: -1
            })
        } else {
            const emp = await empModel.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "Employee updated successfully.",
                data: emp,
                flag: 1
            })
        }
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Error in updateing employee.",
            flag: -1
        })
    }
}

module.exports = {
    createEmp,
    getById,
    getAllEmp,
    deleteEmp,
    updateEmp
}