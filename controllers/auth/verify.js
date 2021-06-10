const verify = (req, res) => {
  try {
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(501).json({ message: 'Error' });
  }
};

module.exports = {
  verify,
};
