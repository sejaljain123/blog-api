const Blog = require('../models/blog');


const display_blog = async (req, res) => {
  const posts = await Blog.find({}).populate('created_by');
  res.json({ posts, message: 'display posts' });
};
const create_blog = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    created_at: req.body.created_at,
    created_by: req.decodedToken.userId,
  });

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

const read_blog = async (req, res) => {
  const posts = await Blog.findById({ _id: req.params.id }).populate('created_by');
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts,
  });
};

const user_blog = async (req, res) => {
  const posts = await Blog.find({
    created_by: req.decodedToken.userId,
  }).populate('created_by');

  res.json({ posts, message: 'Posts' });

  // if (req.decodedToken.userId === String(post.created_by)) {
  // }
};

const update_blog = async (req, res) => {
  const post = await Blog.findById({ _id: req.params.id });
  if (req.decodedToken.userId === String(post.created_by)) {
    post.title = req.body.title;
    post.description = req.body.description;
    post.content = req.body.content;

    await post.save();
    res.json({ message: 'Updated' });
  } else {
    res.json({ message: 'unauthorized' });
  }
};
const delete_post = async (req, res) => {
  const post = await Blog.findById({ _id: req.params.id });
  console.log(post);
  if (req.decodedToken.userId === String(post.created_by)) {
    await Blog.deleteOne(post);
    res.json({ success: true, message: 'Post Deleted' });
  } else res.json({ success: false, message: 'Unauthorized' });
};

module.exports = {
  create_blog,
  display_blog,
  update_blog,
  delete_post,
  read_blog,
  user_blog,
};
