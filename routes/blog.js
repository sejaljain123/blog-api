const express = require('express');
const router = express.Router();
var Blog = require('../controllers/blog');
router.get('/create', Blog.create_blog);
router.get('/display', Blog.display_blog);
router.get('/display/:id', Blog.display_blog_byId);
module.exports = router;
