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
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "Profile updated successfully",
      user: user,
    });

  } catch (error) {
    console.error("UPDATE PROFILE ERROR:", error);

    res.status(500).json({
      message: error.message,
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