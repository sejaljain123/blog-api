var express = require('express');
var router = express.Router();
var register_controller = require('../controllers/registercontroller');
var signin_controller = require('../controllers/signincontroller');
router.post('/register', register_controller.handleRegister);
router.post('/signin', signin_controller.handleSignin);
module.exports = router;
