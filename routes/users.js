var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/usercontroller');

router.post('/', user_controller.handleUser);
module.exports = router;
