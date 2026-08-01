const User = require("../models/user");


// get user profile
const getProfile = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// update profile
const updateProfile = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


// get all users
const getAllUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    getProfile,
    updateProfile,
    getAllUsers
}; 