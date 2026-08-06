const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//signup code!!

const signUp = async (req, res) => {
    try {
        const { firstName, lastName, password, email } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "user already exists"
            });
        }
        // first password hash
        const hashedPassword = await bcrypt.hash(password, 10);
        //Then user saved
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        res.status(201).json({
            success: true,
            user:newUser
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//signIn code!!

const signIn = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await user.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.json({
            success: true,
            token,
            user
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    signIn,
    signUp
};