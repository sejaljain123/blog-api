const express = require('express');
const router = express.Router();
const register_controller = require('../controllers/auth/register');
const signin_controller = require('../controllers/auth/signin');
router.post('/register', register_controller.handleRegister);
router.post('/signin', signin_controller.handleSignin);
module.exports = router;
