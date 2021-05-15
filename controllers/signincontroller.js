const User = require('../models/user');

const handleSignin = async (req, res) => {
  let email = await User.findOne({ email: req.body.email });
  if (!email) return res.status(400).json('invalid email');

  let password = await User.findOne({ password: req.body.password });
  if (!password) return res.status(400).json('invalid password');

  res.json('login successfull');
};

module.exports = {
  handleSignin,
};
