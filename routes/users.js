var express = require('express');
var router = express.Router();
var register_controller = require('../controllers/register');
var signin_controller = require('../controllers/signin');
router.post('/register', register_controller.handleRegister);
router.post('/signin', signin_controller.handleSignin);
module.exports = router;
