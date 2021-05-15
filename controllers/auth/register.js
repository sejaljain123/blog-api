const User = require('../../models/user');
const handleRegister = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('already exists');

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  res.send(user);
};

module.exports = {
  handleRegister,
};
