const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const handleSignin = async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json('invalid email or password');

  if (user) {
    const cmp = await bcrypt.compare(req.body.password, user.password);
    if (cmp) {
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
      res.json({
        success: true,
        user,
        message: 'login successfull',
        token,
      });
    } else {
      res.json({ success: false, message: 'Wrong Credentials' });
    }
  }
};

module.exports = {
  handleSignin,
};
