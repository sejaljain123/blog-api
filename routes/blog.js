const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
var Blog = require('../controllers/blog');
router.post('/create', auth, Blog.create_blog);
router.get('/display', auth, Blog.display_blog);
router.get('/user/display', auth, Blog.display_userblog);
router.get('/display/:id', auth, Blog.display_blog_byId);
router.delete('/delete/:id', auth, Blog.delete_post);

module.exports = router;
