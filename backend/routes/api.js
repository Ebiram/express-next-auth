const { Router } = require('express')
const router = Router()

const {
    loginValidator,
    registerValidator,
    passwordValidator,
    validateRequest,
    userAuth
} = require('./validator/authValidators')
const accountController = require('../controllers/accountController')
const passport = require('passport')

// login success url
router.get('/', userAuth, (req, res) => {
    res.status(200).json('success')
})

// logout route
router.post('/logout', userAuth, (req, res) => {
    req.logout()
    res.status(200).json('logged out')
})

// login route
router.post('/login', loginValidator(), validateRequest,
    passport.authenticate('local', { successRedirect: '/api' })
)

// register route
router.post('/register', registerValidator(), validateRequest,
    require('../controllers/auth/registerController')
)

// user account
router.get('/account', userAuth, accountController.index)

// change password
router.post('/change-password',
    userAuth,
    passwordValidator(),
    validateRequest,
    accountController.changePassword)

module.exports = router