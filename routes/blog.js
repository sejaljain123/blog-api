const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
var Blog = require('../controllers/blog');
router.post('/create', auth, Blog.create_blog);
router.get('/display', Blog.display_blog);
router.get('/myblog/:id', Blog.read_blog);
router.delete('/delete/:id', auth, Blog.delete_post);
router.put('/update/:id', auth, Blog.update_blog);
router.get('/myblogs', auth, Blog.user_blog);

module.exports = router;
