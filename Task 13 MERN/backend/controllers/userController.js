const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Create User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please enter all fields.');
    }

    // Checking if the user exist in the DB
    const userCheck = await User.findOne({ email });
    if (userCheck) {
        res.status(400);
        throw new Error('The user already exist.');
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPass
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email, 
            token: generateJWT(user.id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc    User Login
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('Please enter all fields to login.');
    }

    const verifyUser = await User.findOne({ email });

    if (!verifyUser) {
        res.status(400);
        throw new Error('Please register first in order to login.');
    } else if (await bcrypt.compare(password, verifyUser.password)) {
        res.status(201).json({
            _id: verifyUser.id,
            name: verifyUser.name,
            email: verifyUser.email, 
            token: generateJWT(verifyUser.id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid Credentials.');
    }
});

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

// Generate JWT
const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECERET, {
        expiresIn: '30d',
    });
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}