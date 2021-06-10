const Blog = require('../models/blog');
const Mongoose = require('mongoose');

const display_blog = async (req, res) => {
  try {
    const posts = await Blog.find({}).populate('created_by');

    res.json({ posts, message: 'display posts' });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ message: 'Error' });
  }
};

const create_blog = async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      created_at: req.body.created_at,
      created_by: req.decodedToken.userId,
    });

    await blog.save();
    if (blog) {
      return res.status(201).json({
        mesaage: 'Post added',
        blog,
      });
    } else {
      return res.status(404).json({
        message: 'Error Adding post',
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(501).json({ message: 'Error' });
  }
};

const read_blog = async (req, res) => {
  try {
    const posts = await Blog.findById({ _id: req.params.id }).populate('created_by');
    return res.status(200).json({
      message: 'Posts fetched successfully',
      posts,
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ message: 'Error' });
  }
};

const user_blog = async (req, res) => {
  try {
    const posts = await Blog.find({
      created_by: Mongoose.Types.ObjectId(req.decodedToken.userId),
    }).populate('created_by');

    return res.status(200).json({ posts, message: 'Posts' });
  } catch (err) {
    console.log(err);
    return res.status(501).json({ message: 'Error' });
  }
};

const update_blog = async (req, res) => {
  try {
    const post = await Blog.findById({ _id: req.params.id });
    if (req.decodedToken.userId === String(post.created_by)) {
      post.title = req.body.title;
      post.description = req.body.description;
      post.content = req.body.content;

      await post.save();
      return res.status(200).json({ message: 'Updated' });
    } else {
      return res.status(400).json({ message: 'unauthorized' });
    }
  } catch (err) {
    console.log(err);
    returnres.status(501).json({ message: 'Error ' });
  }
};

const delete_post = async (req, res) => {
  try {
    const post = await Blog.findById({ _id: req.params.id });
    if (req.decodedToken.userId === String(post.created_by)) {
      await Blog.deleteOne(post);
      return res.status(200).json({ success: true, message: 'Post Deleted' });
    } else {
      return res.status(400).json({ success: false, message: 'Unauthorized' });
    }
  } catch (err) {
    console.log(err);
    return res.status(501).json({ message: 'Error' });
  }
};

module.exports = {
  create_blog,
  display_blog,
  update_blog,
  delete_post,
  read_blog,
  user_blog,
};
