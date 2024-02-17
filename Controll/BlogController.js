const Blog = require('../models/Blog');

// Dummy database simulation
const blogDatabase = [];

const getAllBlogs = (req, res) => {
  // Return all blogs
  res.status(200).json({ message: 'All blogs retrieved successfully', blogs: blogDatabase });
};

const createBlog = (req, res) => {
  const { title, content, authorId } = req.body;

  // Check if the author exists
  const author = authorDatabase.find(author => author.id === authorId);
  if (!author) {
    return res.status(404).json({ message: 'Author not found' });
  }

  // Create a new blog
  const newBlog = new Blog(title, content, authorId);
  blogDatabase.push(newBlog);

  res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
};

const getBlogByAuthorId = (req, res) => {
  const authorId = parseInt(req.params.authorId);

  // Filter blogs by author ID
  const authorBlogs = blogDatabase.filter(blog => blog.authorId === authorId);

  if (authorBlogs.length > 0) {
    res.status(200).json({ message: 'Blogs retrieved successfully', blogs: authorBlogs });
  } else {
    res.status(404).json({ message: 'No blogs found for this author' });
  }
};

module.exports = { getAllBlogs, createBlog, getBlogByAuthorId };