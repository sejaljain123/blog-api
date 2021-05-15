const Blog = require('../models/blog');

const create_blog = async (req, res) => {
  let blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    content: req.body.contnet,
    created_at: req.body.created_at,
    created_by: req.body.created_by,
  });
  await blog.save();
  res.send(blog);
};

const display_blog = async (req, res) => {
  const posts = await Blog.find({}).populate('created_by');
  res.send(posts);
};

const display_blog_byId = async (req, res) => {
  const posts = await Blog.findById(req.params.id);
  res.send(posts);
};
module.exports = {
  create_blog,
  display_blog,
  display_blog_byId,
};
