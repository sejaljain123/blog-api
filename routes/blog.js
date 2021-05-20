const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
var Blog = require('../controllers/blog');
router.get('/create', auth, Blog.create_blog);
router.get('/display', auth, Blog.display_blog);
router.get('/display/:id', auth, Blog.display_blog_byId);
module.exports = router;
