const { body, validationResult } = require('express-validator');
const User = require('../../models/user')

const loginValidator = () => {
    return [
        body('username')
            .notEmpty()
            .withMessage('Username is required'),
        body('password')
            .notEmpty()
            .withMessage('Password is required')
            .isLength({ min: 8 })
            .withMessage('Minimum password length is 8 character')
    ]
}

const registerValidator = () => {
    return [
        body('username')
            .exists()
            .notEmpty()
            .withMessage('Username is required')
            .isLength({ min: 3 })
            .withMessage('Minimum username length is 3 character')
            .custom(value => User.checkUsername(value))
            .withMessage('This username exist'),
        body('email')
            .exists()
            .notEmpty()
            .withMessage('Email is required')
            .isEmail()
            .withMessage('Enter a valid email')
            .custom(value => User.checkEmail(value))
            .withMessage('This email exist'),
        body('password')
            .exists()
            .notEmpty()
            .withMessage('Password is required')
            .isLength({ min: 8 })
            .withMessage('Minimum password length is 8 character'),
        body('confirm')
            .exists()
            .notEmpty()
            .withMessage('Password confirm is required')
            .isLength({ min: 8 })
            .withMessage('Minimum password confirm length is 8 character')
            .custom((value, { req }) => value === req.body.password)
            .withMessage('Password confirm not match')
    ]
}

const passwordValidator = () => {
    return [
        body('password')
            .notEmpty()
            .withMessage('Password is required')
            .isLength({ min: 8 })
            .withMessage('Minimum password length is 8 character'),
        body('confirm')
            .exists()
            .notEmpty()
            .withMessage('Password confirm is required')
            .isLength({ min: 8 })
            .withMessage('Minimum password confirm length is 8 character')
            .custom((value, { req }) => value === req.body.password)
            .withMessage('Password confirm not match')
    ]
}

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
    }
    next()
}

const userAuth = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthenticated' })
    }
    next()
}

module.exports = {
    loginValidator,
    registerValidator,
    passwordValidator,
    validateRequest,
    userAuth
}