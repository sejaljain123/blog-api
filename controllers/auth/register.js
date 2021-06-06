const User = require('../../models/user');
const bcrypt = require('bcrypt');
const handleRegister = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('already exists');
  const hashed = await bcrypt.hash(req.body.password, 10);
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashed,
  });
  await user.save();
  res.json({
    message: 'successfully added',
    user,
  });
};

module.exports = {
  handleRegister,
};
