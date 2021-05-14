const User = require('../models/user');
var async = require('async');

const handleUser = (req, res) => {
  let user = User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send('already exists');
  } else {
    user = new User({
      name: req.params.name,
      email: req.params.email,
      password: req.params.password,
    });
    user.save();
    res.send(user);
  }
};

module.exports = {
  handleUser: handleUser,
};
