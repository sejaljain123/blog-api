const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const handleSignin = async (req, res) => {
  let user = await User.findOne({ email: req.body.email, password: req.body.password });
  if (!user) return res.status(400).json('invalid email or password');
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

  res.json({
    user,
    message: 'login successfull',
    token,
  });
};

module.exports = {
  handleSignin,
};
