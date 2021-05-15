const User = require('../../models/user');

const handleSignin = async (req, res) => {
  let user = await User.findOne({ email: req.body.email, password: req.body.password });
  if (!user) return res.status(400).json('invalid email or password');

  res.json('login successfull');
};

module.exports = {
  handleSignin,
};
