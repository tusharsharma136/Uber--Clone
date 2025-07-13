const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
// const userModel = require('../models/user.model');
const authMiddleware = require('../middlewares/auth.middleware');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Vehicle color is required'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Vehicle plate is required'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Invalid capacity'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid Vehicle type'),
],
captainController.registerCaptain
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
captainController.loginCaptain

)

router.get('/profile', authMiddleware.authCaptain,captainController.getCaptainProfile)      

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)  

module.exports = router;