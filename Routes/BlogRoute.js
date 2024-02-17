clogroute.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const authenticateUser = require('../middleware/authenticationMiddleware');

// Get all blogs
router.get('/', authenticateUser, blogController.getAllBlogs);

// Create new blog
router.post('/', authenticateUser, blogController.createBlog);

// Get blog by author's ID
router.get('/:authorId', authenticateUser, blogController.getBlogByAuthorId);

module.exports = router;