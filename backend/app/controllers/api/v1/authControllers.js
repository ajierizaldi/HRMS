const model = require('../../../models');
const jwt = require('jsonwebtoken');
const { genSalt, hash, compareSync } = require('bcrypt');

const cryptPassword = async (password) => {
    const salt = await genSalt(10);
    return hash(password, salt);
}

module.exports = {
    register: async (req, res) => {
        try {
            // Check if email already exists
            const userExist = await model.User.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (userExist) {
                return res.status(400).json({
                    success: false,
                    message: 'Email already exists',
                    error: null,
                    data: null
                });
            }

            // create new user
            const newUser = await model.User.create({
                name: req.body.name,
                email: req.body.email,
                password: await cryptPassword(req.body.password)
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
                error: error,
                data: null
            });
        }
    },
    login: async (req, res) => {
        try {

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
                error: error,
                data: null
            });
        }
    }
}