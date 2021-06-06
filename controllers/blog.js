const Blog = require('../models/blog');
const User = require('../models/user');

const create_blog = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    created_at: req.body.created_at,
    created_by: req.decodedToken.userId,
  });
  console.log(req.body);
  await blog
    .save()
    .then((blog) => {
      if (blog) {
        res.status(201).json({
          mesaage: 'Post added',
          blog,
        });
      } else {
        res.status(404).json({
          message: 'Error Adding post',
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(501).json({ message: 'Error Adding Post' });
    });
};

const display_blog = async (req, res) => {
  const posts = await Blog.find({}).populate('created_by');
  res.json({ posts, message: 'display posts' });
};
const display_userblog = async (req, res) => {
  const posts = await Blog.findById({ _id: req.params.id }).populate('created_by');
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts,
  });
};
const delete_post = async (req, res) => {
  await Blog.findOneAndDelete({ _id: req.params.id }, function (err, post) {
    if (err) {
      return next(err);
    }
    if (req.decodedToken.userId === user._id) {
      if (!post) {
        return res.json({ message: 'Post does not exist!' });
      }
      return res.json({ message: 'post deleted' });
    } else {
      return res.json({ message: 'Not authorized' });
    }
  });
};

module.exports = {
  create_blog,
  display_blog,

  delete_post,
  display_userblog,
};
