const verify = (req, res) => {
  res.status(200).json({ success: true });
};
module.exports = {
  verify,
};
