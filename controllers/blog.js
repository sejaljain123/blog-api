const { request } = require('express');
const Blog = require('../models/blog');

const create_blog = async (req, res) => {
  let blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    created_at: req.body.created_at,
    created_by: req.body.created_by,
  });
  await blog
    .save()
    .then((blog) => {
      if (blog) {
        res.status(201).json({
          mesaage: 'Post added',
          blog: {
            id: blog._id,
          },
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

const display_blog_byId = async (req, res) => {
  const posts = await Blog.findById(req.params.id);
  res.send(posts);
};
const delete_post = async (req, res) => {
  await Blog.findOneAndDelete({ _id: req.params.id }, function (err, post) {
    if (err) {
      return next(err);
    }
    if (!post) {
      return res.json({ message: 'Post does not exist!' });
    }
    return res.json({ message: 'post deleted' });
  });
};

module.exports = {
  create_blog,
  display_blog,
  display_blog_byId,
  delete_post,
};
