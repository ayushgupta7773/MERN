const userModel = require('../models/UserModel.js');
const getAllUserFromDB = async (req, res) => {
    let users = await userModel.find();
    res.status(200).json({
        message: 'All users are got successfully.',
        data: users
    })
}

const createUser = async (req, res) => {
    let savedUser = await userModel.create(req.body);
    console.log(savedUser);
    res.status(201).json({
        message: "User created successfully.",
    })
}

const getById = async (req, res) => {
    let id = req.params.id;
    // console.log("params..." + req.params);
    // console.log("id: " + id);

    let user = await userModel.findById(id);

    res.status(200).json({
        message: "getUserById called",
        data: user
    })
}

const getAllUser = async (req, res) => {
    res.status(200).json({
        message: "Get all users."
    })
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id);

    res.status(200).json({
        message: "User deleted successfully. Delete data: ",
        data: user
    })
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const new_data = req.body;

    const data = userModel.findByIdAndUpdate(id, new_data);

    res.status(201).json({
        message: "User updated successfully."
    })
}

const getUsers = async (req, res) => {
    let stu = [
        {
            id: 1,
            name: 'Ram',
            std: 12
        },
        {
            id: 2,
            name: 'Shyam',
            std: 11
        },
        {
            id: 3,
            name: 'Shiv',
            std: 10
        }
    ]

    res.status(200).json({
        message: 'All users.',
        data: stu
    })
}

module.exports = {
    getAllUser,
    getUsers,
    getAllUserFromDB,
    createUser,
    getById,
    deleteUser,
    updateUser
}