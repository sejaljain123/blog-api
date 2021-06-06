const express = require('express');
const router = express.Router();
const register_controller = require('../controllers/auth/register');
const signin_controller = require('../controllers/auth/signin');
const verify_controller = require('../controllers/auth/verify');
const auth = require('../middleware/auth');

router.post('/register', register_controller.handleRegister);
router.post('/signin', signin_controller.handleSignin);
router.get('/verify', auth, verify_controller.verify);

module.exports = router;
